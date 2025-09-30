import React from 'react'
import './Quote.css';
import '../App.css';

function Quote() {
  return (
    <div className="quote-page">
         <header className="quote-hero">
        <h1 className="">Get Your Free Quote</h1>
        <p>Tell us about your construction project and we'll provide you with a detailed, competitive quote. Our expert team will review your requirements and get back to you within 24 hours.</p>
        </header>
        <div className="quote_form">
            <form className="quote-card" onSubmit={(e) => e.preventDefault()}>
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

            {/* Project Details */}
            <fieldset>
            <legend>Project Details</legend>

            <div className="grid two">
                <div className="field">
                <label htmlFor="projectType">
                    Project Type <span aria-hidden="true">*</span>
                </label>
                <select id="projectType" name="projectType" required>
                    <option value="">Select Project Type</option>
                    <option>New Build</option>
                    <option>Renovation</option>
                    <option>Extension</option>
                    <option>Commercial Fit-Out</option>
                    <option>Maintenance</option>
                </select>
                </div>

                <div className="field">
                <label htmlFor="propertyType">Property Type</label>
                <select id="propertyType" name="propertyType">
                    <option value="">Select Property Type</option>
                    <option>Detached</option>
                    <option>Semi-Detached</option>
                    <option>Terraced</option>
                    <option>Flat / Apartment</option>
                    <option>Commercial</option>
                </select>
                </div>

                <div className="field">
                <label htmlFor="projectSize">Project Size</label>
                <select id="projectSize" name="projectSize">
                    <option value="">Select Project Size</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
                </div>

                <div className="field">
                <label htmlFor="budget">Estimated Budget Range</label>
                <select id="budget" name="budget">
                    <option value="">Select Budget Range</option>
                    <option>£5k – £15k</option>
                    <option>£15k – £50k</option>
                    <option>£50k – £150k</option>
                    <option>£150k+</option>
                </select>
                </div>

                <div className="field">
                <label htmlFor="timeline">Preferred Timeline</label>
                <select id="timeline" name="timeline">
                    <option value="">Select Timeline</option>
                    <option>ASAP</option>
                    <option>1–3 months</option>
                    <option>3–6 months</option>
                    <option>6+ months</option>
                </select>
                </div>

                <div className="field">
                <label htmlFor="startDate">Preferred Start Date</label>
                <input id="startDate" name="startDate" type="date" placeholder="dd/mm/yyyy" />
                </div>
            </div>
            </fieldset>

            {/* Project Location */}
            <fieldset>
            <legend>Project Location</legend>

            <div className="grid two">
                <div className="field">
                <label htmlFor="address">Project Address</label>
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
                Project Description <span aria-hidden="true">*</span>
                </label>
                <textarea
                id="description"
                name="description"
                rows={6}
                required
                placeholder="Briefly describe the scope, rooms, materials, or any special requirements…"
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

export default Quote
