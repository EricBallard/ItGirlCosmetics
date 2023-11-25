import '../styles/Policy.css'

import { useEffect, useState } from 'react'

import { useLocation } from "react-router-dom";

const Policy = () => {

    const [policies, setPolicies] = useState([])

    const location = useLocation()

    useEffect(() => {


        if (location.pathname === '/item-policy') {
            setPolicies([
                <div className="policy-info">
                    <h3>Refund, Return, & Exchange Policy</h3>
                    <p>
                        Due to sanitary/health reasons our makeup products are not eligible for refunds or exchanges.
                        No refunds, or exchanges will be granted for any reason with the exception of receiving the wrong product.
                    </p>

                    <h3>Wrong Item Policy</h3>
                    <p>
                        Accidents happen!, it is our job to own them by responding quickly and provide a solution!
                        If you receive the wrong, or missing item(s), contact us immediately via email at contact@itgirlcosmetics.co!
                        Be sure to include the recipient's name, order number, as well as a screenshot of the order summary.
                        Also, include a photo as a source of proof that the wrong item was received.
                    </p>

                    <h3>Invalid Address Policy</h3>
                    <p>
                        Please ensure that all Suite/Apt/Unit numbers and respective abbreviations are listed in ‘Address Line 2’.
                        If the recommendations above are not properly acknowledged and executed by the customer, he/she assumes all risk of not receiving his/her order.
                    </p>

                    <h3>Missing Package Policy</h3>
                    <p>
                        If the carrier has deemed that your order has been delivered, but you have not received it please check your leasing office and/or front desk if possible. If your parcel is still not found please contact us via email at contact@itgirlcosmetics.co for further instructions on how to file a missing package claim.
                    </p>
                </div >
            ])
        } else {
            setPolicies([
                <div className="policy-info">
                    <h3>Privacy Policy</h3>

                    <p>
                        We respect your privacy! In order to keep you informed about our order delivery status, potential shopping delays, latest products, specials, and other news, ask your provide an e-mail address.
                        To fulfill your order your shipping address and payment information is required. All sensitive information is secured by encryption and sent to our payment processing partner - Stripe.
                        We take pride in our business and you can rest assured that we make every effort possible to ensure the privacy and security of your transactions.

                        All personal data will be treated with the highest grounds of security and confidentiality, unless legally obligated, we will NEVER; sell, rent, or give away your personal data - ever.
                    </p>
                </div>
                ,
                <div className="policy-info">
                    <h3>Email Policy</h3>

                    <p>
                        We may send promotional emails to keep subscribers informed about the latest trends and sales.
                        It is possible to unsubscribe at any time by simply clicking the link at the bottom of an email.
                        If you are not able to unsubscribe send an email to contact@itgirlcosmetics.co with the subject line "unsubscribe".
                    </p>
                </div>
            ])
        }

    }, [location])

    return (
        <div className="policy">

            {policies.map(p => {
                return p
            })}

        </div>
    )
}

export default Policy