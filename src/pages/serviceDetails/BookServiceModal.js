import React, { useEffect, useState } from "react";
import { Modal, DatePicker, Skeleton, Button } from "antd";
import dayjs from 'dayjs';
import moment from "moment";
import axios from "axios";
import { toast } from 'react-toastify';

export default function BookServiceModal({ selectedObj, id, bookNowModalOpen, setBookNowModalOpen }) {

    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [loadingBooking, setLoadingBooking] = useState(false);
    const customDatesToDisable = [];

    useEffect(() => {
        axios
            .get(`/checkAvailability?i=${selectedObj.contractorId}`)
            .then(op => {
                if (op && op.data && op.data.result && op.data.result.length > 0) {
                    op.data.result.forEach((e) => {
                        getDaysArray(dayjs(e.bookingDateTimeFrom).format('YYYY-MM-DD'), dayjs(e.bookingDateTimeTo).format('YYYY-MM-DD'));
                    })
                }
            })
            .catch(e => { console.log("Exception:", e); })
    });

    let getDaysArray = function (start, end) {
        for (let dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate() + 1)) {
            customDatesToDisable.push(dayjs(dt).format('YYYY-MM-DD'));
        }
    };

    function isDisabledDate(current) {
        // Disable dates that are before today
        if (current && current < moment().endOf('day')) {
            return true;
        }
        // Disable custom dates
        const dateString = current.format('YYYY-MM-DD');
        return customDatesToDisable.includes(dateString);
    }

    const handleFromChange = (e) => {
        setFromDate(e);
    }

    const handleToChange = (e) => {
        setToDate(e);
    }

    const handleBookNowModalClose = () => {
        setBookNowModalOpen(false);
        setFromDate('');
        setToDate('');
    }

    const handleOkClick = () => {
        let bookingData = {
            "contractorId": selectedObj.contractorId,
            "serviceId": parseInt(id),
            "bookingDateTimeFrom": dayjs(fromDate).format('YYYY-MM-DD HH:mm:ss'),
            "bookingDateTimeTo": dayjs(toDate).format('YYYY-MM-DD HH:mm:ss'),
            "servicePriceId": parseInt(selectedObj.servicePriceId)
        }
        setLoadingBooking(true);
        axios
            .post('/createNewBooking', bookingData)
            .then(op => {
                setLoadingBooking(false);
                if (op) {
                    handleBookNowModalClose();
                    toast.success('Booking Created Successfully');
                }
            })
            .catch(e => { console.log("Exception: ", e); setLoadingBooking(false) })
    }


    return (
        <Modal
            className="profile-settings"
            title={<><i class="fas fa-calendar-week me-2"></i> Book Service</>}
            open={bookNowModalOpen}
            onCancel={handleBookNowModalClose}
            footer={null}
        >
            <div className="mt-4">
                <div className="mb-3">
                    <label for="name" className="form-label">Booking From Date</label>
                    <DatePicker
                        className="form-control"
                        format="YYYY-MM-DD HH:mm"
                        showTime={{ defaultValue: dayjs('00:00:00', 'HH:mm') }}
                        placeholder={'Select booking from date'}
                        onChange={handleFromChange}
                        disabledDate={isDisabledDate}
                    />
                </div>
                <div className="mb-3">
                    <label for="address" className="form-label">Booking To Date</label>
                    <DatePicker
                        className="form-control"
                        format="YYYY-MM-DD HH:mm"
                        showTime={{ defaultValue: dayjs('00:00:00', 'HH:mm') }}
                        placeholder={'Select booking to date'}
                        onChange={handleToChange}
                        disabledDate={isDisabledDate}
                    />
                </div>
                <div className="d-flex align-items-center justify-content-end mt-5">
                    <Button className="me-2 d-flex align-items-center justify-content-center" onClick={() => handleBookNowModalClose()} icon={<i className="fas fa-times me-2" />} htmlType="button">Cancel</Button>
                    <Button type="primary" htmlType="submit" disabled={!fromDate || !toDate} loading={loadingBooking} onClick={handleOkClick} icon={<i class="fas fa-calendar-week me-2"></i>}>Book</Button>
                </div>
            </div>
        </Modal>
    );
}