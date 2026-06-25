import { useState } from "react";

/**
 * Displays a contact form that opens the user's email client with a prefilled message.
 *
 * @param {object} props - Component properties.
 * @param {string} props.email - Recipient email address.
 * @returns {JSX.Element} Contact form.
 */
const Form = (props) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    /**
     * Updates the matching form field from the current input event.
     *
     * @param {React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>} e - Input change event.
     * @returns {void}
     */
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    /**
     * Builds a mailto URL from the form data and redirects the browser to it.
     *
     * @param {React.FormEvent<HTMLFormElement>} e - Form submit event.
     * @returns {void}
     */
    const handleSubmit = (e) => {
        e.preventDefault();

        const to = props.email;

        const subject = encodeURIComponent(
            `[Contact] ${formData.subject} - ${formData.name}`);

        const body = encodeURIComponent(
            `Nom : ${formData.name}
            Email : ${formData.email}
            Message: ${formData.message}`
        );

        const mailtoLink = `mailto:${to}?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        })
    }

    return(
        <div className="text-start h-100">
            <div>
                <h2 className="text-center mt-4" id="formTitle">
                    Formulaire de contact
                </h2>
            </div>
            <form id="contactForm" onSubmit={handleSubmit} autoComplete="on">
                <div className="">
                    <label htmlFor="name" className="d-block">Nom</label>
                    <input 
                        type="text" id="name" name="name" required autoComplete="name"
                        value={formData.name} onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="d-block">Email</label>
                    <input 
                        type="email" id="email" name="email" required autoComplete="email"
                        value={formData.email} onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="d-block">Objet</label>
                    <input 
                        type="text" id="subject" name="subject" required autoComplete="off"
                        value={formData.subject} onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="message" className="d-block">Message</label>
                   <textarea name="message" id="message" rows="5" required autoComplete="off"
                    value={formData.message} onChange={handleChange}
                   />
                </div>
                <div className="container-fluid text-center">
                    <button type='submit' className="mx-auto">Envoyer</button>
                </div>
                
            </form>
        </div>
    )
}

export default Form;
