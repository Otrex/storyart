export default {
    ERROR_MSG : {
        ROUTE_NOT_FOUND: "route not found",
        AUTH: {
            USER_EXIST: "user already exists",
            USER_NOT_EXIST: "user does not exists",
            USER_NOT_FOUND: "email or password incorrect",
            NOT_LOGGED_IN: "user not authenticated yet",
            NOT_VERIFIED: "user not verified",
            PASSWORD_RESET_FAILED: "password reset failed due to invalid token"
        },
        VALIDATION: {
            NO_SCHEMA: "no schema found"
        }
    },

    SUCCESS_MSG : {
        VERIFICATION_COMPLETE: "verification complete",
        PASSWORD_UPDATED: "password reset updated"
    },
    APP : {
        ENV: {
            PRODUCTION: "PRODUCTION",
            DEVELOPMENT: "DEVELOPMENT",
            TESTING: "TESTING"
        }
    },
    MAIL : {
        REGISTRATION: "REGISTRATION",
        PASSWORD_RESET: "PASSWORD_RESET"
    }
}