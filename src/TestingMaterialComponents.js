// import {MDCTextField} from '@material/textfield';
// import {MDCRipple} from '@material/ripple';

// const username = new MDCTextField(document.querySelector('.username'));
// const password = new MDCTextField(document.querySelector('.password'));

function TestingMaterialComponents() {
    return (
        <div>
            <p>
                Material Components Web 2.0
            </p>

            <div>
                <label className="mdc-text-field mdc-text-field--filled username">
                    <span className="mdc-text-field__ripple"></span>
                    <input type="text" className="mdc-text-field__input" aria-labelledby="username-label" name="username"/>
                    <span className="mdc-floating-label" id="username-label">Username</span>
                    <span className="mdc-line-ripple"></span>
                </label>
                <label className="mdc-text-field mdc-text-field--filled password">
                    <span className="mdc-text-field__ripple"></span>
                    <input type="password" className="mdc-text-field__input" aria-labelledby="password-label" name="password"/>
                    <span className="mdc-floating-label" id="password-label">Password</span>
                    <span className="mdc-line-ripple"></span>
                </label>
            </div>{/* TEXTFIELDS DIV */}

            <div class="button-container">
                <button type="button" class="mdc-button cancel">
                    <div class="mdc-button__ripple"></div>
                    <span class="mdc-button__label">
                    Cancel
                    </span>
                </button>
                <button class="mdc-button mdc-button--raised next">
                    <div class="mdc-button__ripple"></div>
                    <span class="mdc-button__label">
                    Next
                    </span>
                </button>
            </div>{/* BUTTONS DIV */}       

            <script src="testingmaterial.js" async></script>    

        </div>
    );
  }
  
export default TestingMaterialComponents;
  