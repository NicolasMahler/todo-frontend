export const store = function() {
    let user = {
        firstName: '',
        lastName: '',
        email: '',
        token: '',
    };

    return {
        updateUser: function(token = '', email = '', firstName = '', lastName = '') {
            if (token !== '') {
                user.token = token;
            }
            if (email !== '') {
                user.email = email;
            }
            if (firstName !== '') {
                user.firstName = firstName;
            }
            if (lastName !== '') {
                user.lastName = lastName;
            }
        },

        getUser: function() {
            return user;
        }
    }
}

