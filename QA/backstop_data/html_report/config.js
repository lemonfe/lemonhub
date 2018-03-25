report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/yd_qq_0_document_0_phone.png",
        "test": "../bitmaps_test/20180325-192943/yd_qq_0_document_0_phone.png",
        "selector": "document",
        "fileName": "yd_qq_0_document_0_phone.png",
        "label": "qq",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://map.qq.com/m/",
        "referenceUrl": "",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "3.99",
          "analysisTime": 30
        },
        "diffImage": "../bitmaps_test/20180325-192943/failed_diff_yd_qq_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/yd_qq_0_document_1_tablet.png",
        "test": "../bitmaps_test/20180325-192943/yd_qq_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "yd_qq_0_document_1_tablet.png",
        "label": "qq",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://map.qq.com/m/",
        "referenceUrl": "",
        "error": "Reference file not found /Users/lemon/studyspce/lemonhub/QA/backstop_data/bitmaps_reference/yd_qq_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "yd"
});