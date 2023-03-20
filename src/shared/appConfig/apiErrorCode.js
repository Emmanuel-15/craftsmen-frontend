export const ERROR_MESSAGES = {
    "INVALID_OTP": "The otp provided by you is invalid or has been expired",
    "INVALID_EMAIL_PHONE": "Invalid login credentials entered",
    "EMAIL_OR_PHONE_NUMBER_NOT_FOUND": "The credentials entered by you are invalid",
    "INVALID_TOKEN": "Your token expired so logging you out of the system",
    "NO_AUTHORIZATINO_HEADER_FOUND": "Please login to proceed.",
    "INVALID_ID": "Invalid id",

    "NAME_SHOULD_NOT_EXCEED_20_CHARACTERS": "Name should be less than 20 characters",
    "ADDRESS_SHOULD_NOT_EXCEED_100_CHARACTERS": "Address should be less than 100 characters",

    "INCORRECT_BOOKING_DATE_TIME_TO": "Incorrect dates.",
    "CONTRACTOR_NOT_AVAILABLE": "The contractor is not available for the selected date please choose some other date.",
    "CONTRACTOR_ID_DOES_NOT_EXIST": "Contractor does not exist.",
    "SERVICE_ID_DOES_NOT_EXIST": "Service does not exist.",
    "SERVICE_PRICE_ID_DOES_NOT_EXIST": "Service price not available",

    "ERROR_WHILE_FETCHING_BOOKINGS": "Please try after some time.",
    "ERROR_WHILE_CREATING_BOOKING": "Booking not created. Please try after some time.",
    "BOOKING_DATE_TIME_TO_IS_REQUIRED": "Booking date & time is required",
    "BOOKING_DATE_TIME_FROM_IS_REQUIRED": "Booking date & time is required",
    "NO_BOOKING_FOUND": "No bookings found",
    "INVALID_EMAIL": "Invalid email address",
    "ERROR_UPDATING_BOOKING": "Error while updating booking, Please try again later.",
    "ERROR_WHILE_DELETING_BOOKING": "Error while deleting bookings, Please try again later.",
    "ERROR_WHILE_FETCHING_CUSTOMER_BOOKINGS": "Error while fetching customer bookings, Please try again later.",
    "BOOKING_ALREADY_CANCELLED": "Booking already cancelled.",
    "ERROR_WHILE_CANCELLING_BOOKING": "Error while cancelling booking, Please try again later.",
    "ERROR_WHILE_FETCHING_RECORDS": "Error while fetching records.",
    "MAX_BOOKING_PERIOD_5_DAYS": "You can book contractor for maximum 5 days.",

    "ERROR_WHILE_FETCHING_CONTRACTORS": "Error while fetching contractors",
    "ERROR_WHILE_FETCHING_CONTRACTOR": "Error while fetching contractor",
    "PROVIDE_DIFFERENT_NUMBERS": "Please provide different numbers.",
    "ERROR_WHILE_CREATING_CONTRACTOR": "Error while creating customer, Please try again later",
    "NO_CONTRACTOR_FOUND": "No contractor found.",
    "ERROR_UPDATING_CONTRACTOR": "Error updating contractor, Please try again later.",
    "CONTRACTOR_NOT_FOUND": "Contractor not found",
    "CONTRACTOR_ID_IN_USE": "Contractor id already in use.",
    "ERROR_WHILE_DELETING_CONTRACTOR": "Error while deleting contractor, Please try again later.",


    "ERROR_WHILE_FETCHING_CONTRACTOR_SERVICES": "Error while fetching contractor services, Please try again later.",
    "ERROR_WHILE_CREATING_CONTRACTOR_SERVICE": "Error while creating contractor services, Please try again later.",
    "CONTRACTOR_SERVICE_ID_NOT_FOUND": "Contractor service not found.",
    "CONTRACTOR_SERVICES_ALREADY_EXISTS": "Contractor service already exists.",
    "ERROR_UPDATING_CONTRACTOR_SERVICES": "Error while updating contractor services, Please try again later.",
    "CONTRACTOR_SERVICES_NOT_FOUND": "Contractor services not found.",
    "ERROR_WHILE_DELETING_CONTRACTOR_SERVICES": "Error while deleting contractor services, Please try again later.",


    "ERROR_WHILE_FETCHING_CUSTOMERS": "Error while fetching customers, Please try again later.",
    "ERROR_WHILE_SENDING_OTP": "Error while sending otp, Please try again later.",
    "ERROR_WHILE_FETCHING_USER_DETAILS": "Error while fetching user details, Please try again later.",
    "INVALID_PHONE_NUMBER": "Invalid phone number.",
    "EMAIL_ALREADY_IN_USE": "Email already in use.",
    "PHONE_NUMBER_ALREADY_IN_USE": "Phone number already in use.",
    "ERROR_WHILE_UPDATING_USER_DETAILS": "Error while updating user details, Please try agian later.",
    "NO_CUSTOMER_FOUND": "No customer found.",
    "ERROR_WHILE_DELETING_CUSTOMER": "Error while deleting customer, Please try again later.",


    "MAX_FILE_SIZE_10MB!": "File size should not exceed 10MB.",
    "ONLY_JPEG_&_PNG_FILES_ALLOWED": "Only jpeg and png file formats allowed.",
    "NO_FILE_WAS_UPLOADED": "File not uploaded.",
    "ERROR_SENDING_MAIL": "Error while sending mail, Please try again later.",


    "ERROR_WHILE_FETCHING_SERVICE_PRICE": "Error while fetching service prices.",
    "SERVICE_ID_NOT_PRESENT": "Service does not exist.",
    "CONTRACTOR_ID_NOT_PRESENT": "Contractor does not exist.",
    "ERROR_WHILE_CREATING_SERVICE_PRICES": "Error while creating service price.",
    "SERVICE_PRICE_NOT_FOUND": "Service price not found.",
    "ERROR_UPDATING_SERVICE_PRICE": "Error upading service price, Please try again later.",
    "ERROR_WHILE_DELETING_SERVICE_PRICE": "Error deleting service price, Please try again later.",


    "ERROR_WHILE_FETCHING_SERVICES": "Error fetching services.",
    "SERVICE_TYPE_NOT_PRESENT": "Service type does not exist.",
    "ERROR_WHILE_CREATING_SERVICE": "Error while creating service, Please try again later.",
    "NO_SERVICE_FOUND": "No service found.",
    "SERVICE_TITLE_EXISTS": "Service title already exists.",
    "SERVICE_TYPE_DOES_NOT_EXIST": "Service type does not exists.",
    "ERROR_UPDATING_SERVICE": "Error while updating service, Please try again later.",
    "SERVICE_ID_IN_USE": "Service already in use.",
    "SERVICE_NOT_FOUND": "Service not found.",
    "ERROR_WHILE_DELETING_SERVICE": "Error while deleting service, Please try again later.",


    "ERROR_WHILE_FETCHING_SERVICE_TYPE": "Error while fetching service type.",
    "NO_SERVICE_TYPE_FOUND": "Service type found.",
    "SERVICE_TYPE_ALREADY_EXISTS": "Service type already exists.",
    "ERROR_UPDATING_SERVICE_TYPE": "Error updating service type, Please try again later.",
    "SERVICE_TYPE_NOT_FOUND": "Service type not found.",
    "SERVICE_TYPE_ALREADY_IN_USE": "Service type already in use.",
    "ERROR_WHILE_DELETING_SERVICE_TYPE": "Error while deleting service type, Please try again later.",


    "PASSWORD_DOES_NOT_MATCH": "Passwords don't match.",
    "24_CHARACTERS_INCLUDING_LETTERS_AND_DIGITS": "Password must contain 24 chars including letters and digits.",
    "PASSWORD_MUST_BE_6-24_CHARACTERS_INCLUDING_LETTERS_AND_DIGITS": "Password must contain 24 chars including letters and digits.",
    "USERNAME_IS_ALREADY_IN_USE": "Username already in use.",
    "EMAIL_IS_ALREADY_IN_USE": "Email already in use.",
    "EMPTY_BODY": "Empty body.",
    "PASSWORD_IS_REQUIRED": "Password is required.",
    "INVALID_EMAIL_OR_PASSWORD": "Invalid email or password.",
    "NO_AUTHORIZATION_HEADER_FOUND": "No authorization header found.",
    "FORMAT_IS_AUTHORIZATION:BEARER_[TOKEN]": "Incorrect authorization header format.",
    "INACTIVE_TOKEN": "Inactive token.",
    "USERNAME_OR_EMAIL_IS_REQUIRED": "Username or email is required.",
    "CURRENT_PASSWORD_IS_REQUIRED": "Current password is required.",
    "USER_NOT_FOUND": "User not found.",
    "INVALID_USERNAME/EMAIL_OR_PASSWORD": "Invalid username or email or password.",
    "INVALID_USERNAME/RESET_TOKEN_IS_REQUIRED": "Reset token is required.",

}