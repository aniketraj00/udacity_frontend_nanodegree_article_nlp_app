//Style Imports
import './styles/alert.scss';
import './styles/progress.scss';
import './styles/base.scss';
import './styles/layout.scss';
import './styles/utils.scss';
import './styles/card.scss';
import './styles/button.scss';
import './styles/form.scss';
import './styles/list.scss';


//Assets Imports
import agreeIcon from './img/agreement.png';
import confidenceIcon from './img/confidence-level.png';
import polarityIcon from './img/polarity.png';
import subjectivityIcon from './img/subjectivity.png';
import meaningCloudLogo from './img/logo-meaningcloud.png';
import facebookIcon from './img/facebook.png';
import twitterIcon from './img/twitter.png';
import instagramIcon from './img/instagram.png';


//JS Imports
import { isEmpty, isValidURL, handleSubmit } from "./js/form";
import { 
    generateResultSummaryView, 
    generateSentenceListView, 
    generateFooterView 
} from './js/views';


//Global Variables
const analyzeButton = document.getElementById('analyze-btn');
const sourceTypeInputField = document.getElementById('source-type');
const sourceInputLabel = document.getElementById('source-input-label');
let sourceInputField = document.getElementById('source-input');


//Helper Functions
function showProgressBar() {
    var progressBar = document.querySelector(".progress");
    if (!progressBar.classList.contains("show")) {
        progressBar.classList.add("show");
    }
}

function hideProgressBar() {
    var progressBar = document.querySelector(".progress");
    if (progressBar.classList.contains("show")) {
        progressBar.classList.remove("show");
    }
}

function showAlertDialog(title, message) {
    const alertDialogEl = document.querySelector(".alert");
    const alertTitleEl = document.querySelector(".alert-header-text");
    const alertMsgEl = document.querySelector(".alert-message");
    const alertCloseBtnEl = document.querySelector(".alert-closebtn");

    alertTitleEl.textContent = title;
    alertMsgEl.textContent = message;
    alertDialogEl.classList.add("show");
    alertCloseBtnEl.addEventListener("click", () => {
        alertDialogEl.classList.remove("show");
    });
} 

function parsePolarityScore(score) {
    if(score === 'P+') return 'STRONG POSITIVE';
    if(score === 'P') return 'POSITIVE';
    if(score === 'NEU') return 'NEUTRAL';
    if(score === 'N') return 'NEGATIVE';
    if(score === 'N+') return 'STRONG NEGATIVE';
    return 'NONE';
}


//Event Callbacks
function onSourceInputTypeChange(e) {
    const sourceType = e.target.value;
    let targetInputEl;
    if (sourceType === "url") {
      targetInputEl = document.createElement("input");
      targetInputEl.type = "url";
      targetInputEl.placeholder = "https://www.example.com/...";
      sourceInputLabel.textContent = "Enter Source URL:";
    } else {
      targetInputEl = document.createElement("textarea");
      targetInputEl.placeholder = "Enter text here...";
      targetInputEl.rows = 8;
      targetInputEl.classList.add("resize-none");
      sourceInputLabel.textContent = "Enter Source text:";
    }
    targetInputEl.id = "source-input";
    targetInputEl.classList.add("input-control");
    sourceInputField.replaceWith(targetInputEl);
    sourceInputField = targetInputEl;
}

function onAnalyzeButtonClick(e) {
    e.preventDefault();
    if (isEmpty(sourceInputField.value)) {
      showAlertDialog("Error", "Please fill in all the required fields.");
      return;
    } else if (sourceTypeInputField.value === 'url' && !isValidURL(sourceInputField.value)) {
      showAlertDialog("Error", "Please enter a valid URL.");
      return;
    }
    showProgressBar();
    handleSubmit(sourceTypeInputField.value, sourceInputField.value)
      .then((res) => {
        return res.json();
      })
      .then(resData => {
          hideProgressBar();
          //display results
          if(!resData || !resData.status || !resData.status.code) {
            showAlertDialog("Error", "Something went wrong! Please try again later.");
            return;
          } 
          if(resData.status.code !== '0') {
            showAlertDialog("Error", resData.status.msg);
            return;
          }
          const resultSummaryObj = [
            {
                confidenceIcon,
                confidenceVal: resData.confidence
            },
            {
                polarityIcon,
                polarityVal: parsePolarityScore(resData.score_tag)
            },
            {
                agreeIcon,
                agreeVal: resData.agreement
            },
            {
                subjectivityIcon,
                subjectivityVal: resData.subjectivity
            }
          ];
          document.querySelector('.result-summary').innerHTML = generateResultSummaryView(resultSummaryObj);
          document.querySelector('.result-sentences').innerHTML = generateSentenceListView(resData.sentence_list, parsePolarityScore);
      })
      .catch(err => {
        console.log(err);
        hideProgressBar();
        showAlertDialog("Error", "Something went wrong! Please try again later.");
      });
}


//Initializations
(() => {
    //Attach Event Listeners
    sourceTypeInputField.addEventListener('change', onSourceInputTypeChange);
    analyzeButton.addEventListener('click', onAnalyzeButtonClick);

    //Initialize footer
    document.getElementById('footer').innerHTML = generateFooterView({
      meaningCloudLogo,
      facebookIcon,
      twitterIcon,
      instagramIcon
    });

})();


//Exports