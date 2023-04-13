import { generateResultSummaryView } from '../src/client/js/views';

describe('generateResultSummaryView', () => {
    const resultsArr = [
        { confidenceIcon: '/confidenceIcon.png', confidenceVal: 85 },
        { polarityIcon: '/polarityIcon.png', polarityVal: 'positive' },
        { subjectivityIcon: '/subjectivityIcon.png', subjectivityVal: 'objective' },
        { agreeIcon: '/agreeIcon.png', agreeVal: 'agreement' },
    ]; 
    test('should return a string', () => {
        expect(typeof generateResultSummaryView(resultsArr)).toBe('string');
    });
    test('should return a string with a length greater than 0', () => {
        expect(generateResultSummaryView(resultsArr).length).toBeGreaterThan(0);
    });
    test('should return a string with correct content', () => {
        expect(generateResultSummaryView(resultsArr)).toMatch(
            `<h1 class="result-summary-header mb-2">Summary</h1>
            <div class="card result-summary-content">
                <div class="result-summary-item">
                    <img src="${resultsArr[0].confidenceIcon}" alt="confidence-level">
                    <div class="result-summary-item-txt">
                        <h1>Confidence</h1>
                        <h2>${resultsArr[0].confidenceVal}</h2>
                    </div>
                </div>
                <div class="result-summary-item">
                    <img src="${resultsArr[1].polarityIcon}" alt="polarity">
                    <div class="result-summary-item-txt">
                        <h1>Polarity</h1>
                        <h2>${resultsArr[1].polarityVal}</h2>
                    </div>
                </div> 
                <div class="result-summary-item">
                    <img src="${resultsArr[2].agreeIcon}" alt="association">
                    <div class="result-summary-item-txt">
                        <h1>Associativity</h1>
                        <h2>${resultsArr[2].agreeVal}</h2>
                    </div>
                </div> 
                <div class="result-summary-item">
                    <img src="${resultsArr[3].subjectivityIcon}" alt="subjectivity">
                    <div class="result-summary-item-txt">
                        <h1>Subjectivity</h1>
                        <h2>${resultsArr[3].subjectivityVal}</h2>
                    </div>
                </div>       
            </div>`
        );
    });
});