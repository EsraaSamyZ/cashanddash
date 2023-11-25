
import React from 'react';

const AppointmentForm = () => {
    return (
        <div className="modal-background">
            <div className="modal-content">
                <h3>Appointment Information</h3>
                <form>
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AppointmentForm;
