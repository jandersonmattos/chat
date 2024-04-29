var initESW = function(gslbBaseURL) {
    embedded_svc.settings.displayHelpButton = true; //Or false
    embedded_svc.settings.language = 'pt-BR'; //For example, enter 'en' or 'en-US'

    embedded_svc.settings.smallCompanyLogoImgURL = "https://newloft--uat.sandbox.lightning.force.com/file-asset-public/logoloftcrmhorizontalpositivopng?oid=00D6u0000008jMd";
    embedded_svc.settings.waitingStateBackgroundImgURL = "https://newloft--uat.sandbox.lightning.force.com/file-asset-public/logoloftcrmhorizontalpositivopng?oid=00D6u0000008jMd";
    //embedded_svc.settings.prechatBackgroundImgURL = "https://newloft--uat.sandbox.lightning.force.com/file-asset-public/logoloftcrmhorizontalpositivopng?oid=00D6u0000008jMd";

    embedded_svc.settings.defaultMinimizedText = 'Chat - Atendimento'; //(Defaults to Chat with an Expert)
    embedded_svc.settings.disabledMinimizedText = 'Offline'; //(Defaults to Agent Offline)
    embedded_svc.settings.loadingText = 'Carregando'; //(Defaults to Loading)

    embedded_svc.settings.enabledFeatures = ['LiveAgent'];
    embedded_svc.settings.entryFeature = 'LiveAgent';

    //embeddedservice_bootstrap.settings.hideChatButtonOnLoad = true;

    embedded_svc.settings.prepopulatedPrechatFields =
    {
        FirstName: 'Marcelo'
    };

    embedded_svc.settings.extraPrechatFormDetails = [{
        "label": "Email",
        "value": "janderson.candido@outlook.com",
        "displayToAgent": true
    }, {
        "label": "Motivo Chat",
        "transcriptFields": ["ReasonChat__c"]
    }];

    embedded_svc.settings.extraPrechatInfo = [{
        "entityName": "Contact",
        "showOnCreate": true,
        "linkToEntityName": "Case",
        "linkToEntityField": "ContactId",
        "saveToTranscript": "ContactId",
        "entityFieldMaps": [{
            "isExactMatch": true,
            "fieldName": "FirstName",
            "doCreate": true,
            "doFind": true,
            "label": "First Name"
        }, {
            "isExactMatch": true,
            "fieldName": "LastName",
            "doCreate": true,
            "doFind": true,
            "label": "Last Name"
        }, {
            "isExactMatch": true,
            "fieldName": "Email",
            "doCreate": true,
            "doFind": true,
            "label": "Email"
        }]
    }, {
        "entityName": "Case",
        "showOnCreate": true,
        "saveToTranscript": "CaseId",
        "entityFieldMaps": [{
            "isExactMatch": false,
            "fieldName": "Subject",
            "doCreate": true,
            "doFind": false,
            "label": "issue"
        }, {
            "isExactMatch": false,
            "fieldName": "Status",
            "doCreate": true,
            "doFind": false,
            "label": "Status"
        }, {
            "isExactMatch": false,
            "fieldName": "Origin",
            "doCreate": true,
            "doFind": false,
            "label": "Origin"
        }]
    }];

    embedded_svc.init(
        'https://newloft--uat.sandbox.my.salesforce.com',
        'https://newloft--uat.sandbox.my.site.com/',
        gslbBaseURL,
        '00D6u0000008jMd',
        'Vista_Chat', {
            baseLiveAgentContentURL: 'https://c.la2s-core1.sfdc-xwy4ub.salesforceliveagent.com/content',
            deploymentId: '5726u0000004CG9',
            buttonId: '5736u0000004CPV',
            baseLiveAgentURL: 'https://d.la2s-core1.sfdc-xwy4ub.salesforceliveagent.com/chat',
            eswLiveAgentDevName: 'Vista_Chat',
            isOfflineSupportEnabled: true
        }
    );
};

if (!window.embedded_svc) {
    var s = document.createElement('script');
    s.setAttribute('src', 'https://newloft--uat.sandbox.my.salesforce.com/embeddedservice/5.0/esw.min.js');
    s.onload = function() {
        initESW(null);
    };
    document.body.appendChild(s);
} else {
    initESW('https://service.force.com');
}
