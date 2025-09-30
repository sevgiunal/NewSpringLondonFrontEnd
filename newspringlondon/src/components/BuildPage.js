import React from 'react'
import './BuildPage.css';

function BuildPage() {
  return (
    <div className="build-page">
        <header className="build-hero">
        <h1 className="">Sell Us Your Land!</h1>
        <p>Tell us about your land, our team will get back to you with a number as soon as possible!</p>
        </header>
        <div className="build-form">
            <form className="build-card" onSubmit={(e) => e.preventDefault()}>
            {/* Contact Information */}
            <fieldset>
            <legend>Contact Information</legend>

            <div className="grid two">
                <div className="field">
                <label htmlFor="firstName">
                    First Name <span aria-hidden="true">*</span>
                </label>
                <input id="firstName" name="firstName" required />
                </div>

                <div className="field">
                <label htmlFor="lastName">
                    Last Name <span aria-hidden="true">*</span>
                </label>
                <input id="lastName" name="lastName" required />
                </div>

                <div className="field">
                <label htmlFor="email">
                    Email Address <span aria-hidden="true">*</span>
                </label>
                <input id="email" name="email" type="email" required />
                </div>

                <div className="field">
                <label htmlFor="phone">
                    Phone Number <span aria-hidden="true">*</span>
                </label>
                <input id="phone" name="phone" type="tel" required />
                </div>

                <div className="field col-span-2">
                <label htmlFor="company">Company Name (Optional)</label>
                <input id="company" name="company" />
                </div>
            </div>
            </fieldset>

            {/* Land Location */}
            <fieldset>
            <legend>Land Location</legend>

            <div className="grid two">
                <div className="field">
                <label htmlFor="address">Land Address</label>
                <input id="address" name="address" placeholder="Street address or general area" />
                </div>

                <div className="field">
                <label htmlFor="postcode">Postcode</label>
                <input id="postcode" name="postcode" />
                </div>
            </div>
            </fieldset>

            {/* Project Description */}
            <fieldset>
            <legend>Project Description</legend>
            <div className="field">
                <label htmlFor="description">
                Project Description 
                </label>
                <textarea
                id="description"
                name="description"
                rows={6}
                required
                placeholder="Briefly describe if the land has construction plans that you can sell."
                />
            </div>
            </fieldset>

            <div className="actions">
            <button type="submit">Submit Request</button>
            </div>
        </form>


        </div>
      
    </div>
  )
}

export default BuildPage
