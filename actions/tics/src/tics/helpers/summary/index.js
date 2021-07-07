

const getErrorSummary = (errorList) => {
    let errorMessage = `## TICS Quality Gate\r\n\r\n### :x: Failed \r\n\r\n #### The following errors have occured during analysis:\r\n\r\n`;
    errorList && errorList.forEach(item => errorMessage += `> :x: ${item}\r\n`);

    return errorMessage;
}

const getQualityGateSummary = (qualityGateObj) => {
    let gate_status = qualityGateObj && qualityGateObj.passed === true ? '### :heavy_check_mark: Passed ' : '### :x: Failed'
    let gates_conditions = '';

    qqualityGateObj && ualityGateObj.gates && qualityGateObj.gates.map((gate) => {
        gate.conditions.map((condition) => {
            if(condition.skipped !== true) {
                let condition_status = condition.passed === true ? '> :heavy_check_mark: ' : '> :x: ';
                gates_conditions = gates_conditions + condition_status + " " + condition.descriptionText + '\r\n';  
            }
        })
    })

    let summary = `## TICS Quality Gate \r\n\r\n ${gate_status} \r\n\r\n ${gates_conditions}\n`
    
    return summary;
}

const getLinkSummary = (link) => {
    let linktext = `[See the results in the TICS Viewer](${link})\r\n\r\n`;

    return linktext;
}

const getFilesSummary = (fileList) => {
    let filestext = `#### The following file(s) have been checked:\r\n> ${fileList}`;

    return filestext;
}

module.exports = {
    getErrorSummary: getErrorSummary,
    getQualityGateSummary: getQualityGateSummary,
    getLinkSummary: getLinkSummary,
    getFilesSummary: getFilesSummary
}