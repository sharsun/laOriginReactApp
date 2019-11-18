import React from 'react';
import '../../sass/components/form.scss';

export default function DesignerForm(){
    return(
        <div className="meet-designer">
    <div className="meet-designer__heading">
        <h3>Meet a Designer</h3>
        </div>
    <form className="meet-designer_form">
        <div className="formgroup">
            <input className="formgroup__input" placeholder="Name" />
        </div>
        <div className="formgroup">
            <input className="formgroup__input" placeholder="Email" />
        </div>
        <div className="formgroup">
            <input className="formgroup__input" placeholder="Mobile Number" />
        </div>
        <div className="formgroup">
            <input className="formgroup__chkbox" id="checkbx-watsapp" type="checkbox" />
            <label htmlFor="checkbx-watsapp">You can reach me on WatsApp</label>

        </div>
        <div className="formgroup">
            <input className="formgroup__input" placeholder="City of Current Residence" />
        </div>
        <div className="formgroup">
            <input className="formgroup__input" placeholder="Current Residence Pincode" />
        </div>
    </form>

</div>
    )
}

