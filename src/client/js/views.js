function generateResultSummaryView(resultSummaryArr) {
    return `<h1 class="result-summary-header mb-2">Summary</h1>
            <div class="card result-summary-content">
                <div class="result-summary-item">
                    <img src="${resultSummaryArr[0].confidenceIcon}" alt="confidence-level">
                    <div class="result-summary-item-txt">
                        <h1>Confidence</h1>
                        <h2>${resultSummaryArr[0].confidenceVal}</h2>
                    </div>
                </div>
                <div class="result-summary-item">
                    <img src="${resultSummaryArr[1].polarityIcon}" alt="polarity">
                    <div class="result-summary-item-txt">
                        <h1>Polarity</h1>
                        <h2>${resultSummaryArr[1].polarityVal}</h2>
                    </div>
                </div> 
                <div class="result-summary-item">
                    <img src="${resultSummaryArr[2].agreeIcon}" alt="association">
                    <div class="result-summary-item-txt">
                        <h1>Associativity</h1>
                        <h2>${resultSummaryArr[2].agreeVal}</h2>
                    </div>
                </div> 
                <div class="result-summary-item">
                    <img src="${resultSummaryArr[3].subjectivityIcon}" alt="subjectivity">
                    <div class="result-summary-item-txt">
                        <h1>Subjectivity</h1>
                        <h2>${resultSummaryArr[3].subjectivityVal}</h2>
                    </div>
                </div>       
            </div>`;
}

function generateSentenceListView(sentenceArr, polarityParserCallback) {
    const sentenceItemViews = sentenceArr.map(sentenceObj => {
        return `<div class="list-item">
                    <p class="sentence-text"><span>${sentenceObj.text}</span></p>
                    <p class="sentence-polarity">Polarity: <span>${polarityParserCallback(sentenceObj.score_tag)}</span></p>
                    <p class="sentence-confidence">Confidence: <span>${sentenceObj.confidence}</span></p>
                </div>`    
    });
    return `<div class="result-sentences-content">
                <h1 class="sentence-list-header mb-2">Detailed Analysis</h1>
                <div class="list">
                    ${sentenceItemViews.join("")}
                </div>
            </div>`;
}

function generateFooterView(footerIconsObj) {
    return `<div class="container">
                <img src="${footerIconsObj.meaningCloudLogo}" alt="meaningcloud-logo">
                <h1>Powered by MeaningCloud</h1>
                <h2>Developed by <a href="https://github.com/aniketraj00">Aniket Raj</a></h2>
                <div class="social-icons">
                    <attr title="Facebook icons created by Freepik - Flaticon">
                        <a href="#">
                            <img src="${footerIconsObj.facebookIcon}" alt="facebook-icon">
                        </a>
                    </attr>
                    <attr title="Instagram logo icons created by Laisa Islam Ani - Flaticon">
                        <a href="#">
                            <img src="${footerIconsObj.instagramIcon}" alt="instagram-icon">
                        </a>
                    </attr>
                    <attr title="Twitter logo icons created by Md Tanvirul Haque - Flaticon">
                        <a href="#">
                            <img src="${footerIconsObj.twitterIcon}" alt="twitter-icon">
                        </a>
                    </attr>
                </div>
            </div>`;
}

export {
    generateResultSummaryView,
    generateSentenceListView,
    generateFooterView
}