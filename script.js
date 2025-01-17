// 世界100カ国の国名と通貨コードの対応表（例）
const countryToCurrency = {
    "日本": "JPY",
    "アメリカ合衆国": "USD",
    "カナダ": "CAD",
    "オーストラリア": "AUD",
    "イギリス": "GBP",
    "フランス": "EUR",
    "ドイツ": "EUR",
    "イタリア": "EUR",
    "スペイン": "EUR",
    "中国": "CNY",
    "インド": "INR",
    "韓国": "KRW",
    "ブラジル": "BRL",
    "メキシコ": "MXN",
    "ロシア": "RUB",
    "南アフリカ": "ZAR",
    "スイス": "CHF",
    "スウェーデン": "SEK",
    "オランダ": "EUR",
    "サウジアラビア": "SAR",
    "アラブ首長国連邦": "AED",
    "トルコ": "TRY",
    "アルゼンチン": "ARS",
};

function checkRate() {
    const baseCurrency = document.getElementById('baseCurrency').value;
    const targetCountry = document.getElementById('targetCurrency').value;
    const targetCurrency = countryToCurrency[targetCountry];

    if (targetCurrency) {
        // 仮の為替レート取得（実際にはAPIなどを使って取得する）
        const exchangeRate = getExchangeRate(baseCurrency, targetCurrency);

        const resultElement = document.getElementById('result');
        resultElement.textContent = `1 ${baseCurrency} は ${exchangeRate} ${targetCurrency} です。`;

    } else {
        const resultElement = document.getElementById('result');
        resultElement.textContent = '対応する通貨が見つかりません。';
    }
}

// 仮の為替レートを返す関数（実際にはAPIなどを使って取得する）
function getExchangeRate(base, target) {
    // ここは仮のレートです。実際には為替レートAPIなどを使って取得する必要があります。
    const sampleRates = {
        "JPY": {
            "USD": 0.0091,
            "EUR": 0.0078,
            "GBP": 0.0063,
            "CAD": 0.012,
            "AUD": 0.013,
            "CNY": 0.065,
            "INR": 0.68,
            "KRW": 11.12,
            "BRL": 0.048,
            "MXN": 0.18,
            "RUB": 0.65,
            "ZAR": 0.16,
            "CHF": 0.0089,
            "SEK": 0.095,
            "SAR": 0.034,
            "AED": 0.033,
            "TRY": 0.068,
            "ARS": 0.085,
        },
        "USD": {
            "JPY": 109.85,
            "EUR": 0.85,
            "GBP": 0.69,
            "CAD": 1.32,
            "AUD": 1.43,
            "CNY": 7.15,
            "INR": 74.69,
            "KRW": 1219.66,
            "BRL": 5.25,
            "MXN": 19.89,
            "RUB": 71.44,
            "ZAR": 17.68,
            "CHF": 0.98,
            "SEK": 10.45,
            "SAR": 3.75,
            "AED": 3.67,
            "TRY": 7.48,
            "ARS": 93.50
        },
        "EUR": {
            "JPY": 128.69,
            "USD": 1.17,
            "GBP": 0.81,
            "CAD": 1.55,
            "AUD": 1.68,
            "CNY": 8.38,
            "INR": 87.59,
            "KRW": 1431.98,
            "BRL": 6.15,
            "MXN": 23.33,
            "RUB": 83.82,
            "ZAR": 20.73,
            "CHF": 1.15,
            "SEK": 12.25,
            "SAR": 4.40,
            "AED": 4.31,
            "TRY": 8.78,
            "ARS": 109.76,
        },
        "GBP": {
            "JPY": 158.47,
            "USD": 1.44,
            "EUR": 1.23,
            "CAD": 1.91,
            "AUD": 2.07,
            "CNY": 10.34,
            "INR": 107.95,
            "KRW": 1764.86,
            "BRL": 7.58,
            "MXN": 28.75,
            "RUB": 103.31,
            "ZAR": 25.55,
            "CHF": 1.42,
            "SEK": 15.10,
            "SAR": 5.42,
            "AED": 5.31,
            "TRY": 10.82,
            "ARS": 135.29
        },
        "CAD": {
            "JPY": 82.88,
            "USD": 0.76,
            "EUR": 0.65,
            "GBP": 0.52,
            "AUD": 1.08,
            "CNY": 5.40,
            "INR": 56.46,
            "KRW": 923.29,
            "BRL": 3.97,
            "MXN": 15.06,
            "RUB": 53.76,
            "ZAR": 13.30,
            "CHF": 0.74,
            "SEK": 7.89,
            "SAR": 2.83,
            "AED": 2.78,
            "TRY": 5.65,
            "ARS": 70.67
        },
        "AUD": {
            "JPY": 76.54,
            "USD": 0.70,
            "EUR": 0.60,
            "GBP": 0.48,
            "CAD": 0.92,
            "CNY": 5.00,
            "INR": 52.25,
            "KRW": 854.42,
            "BRL": 3.67,
            "MXN": 13.92,
            "RUB": 49.70,
            "ZAR": 12.30,
            "CHF": 0.68,
            "SEK": 7.29,
            "SAR": 2.62,
            "AED": 2.57,
            "TRY": 5.22,
            "ARS": 65.39
        },
        "CNY": {
            "JPY": 15.30,
            "USD": 0.14,
            "EUR": 0.12,
            "GBP": 0.10,
            "CAD": 0.19,
            "AUD": 0.20,
            "INR": 10.45,
            "KRW": 170.88,
            "BRL": 0.73,
            "MXN": 2.78,
            "RUB": 9.94,
            "ZAR": 2.46,
            "CHF": 0.14,
            "SEK": 1.46,
            "SAR": 0.52,
            "AED": 0.51,
            "TRY": 1.04,
            "ARS": 13.08
        },
        "INR": {
            "JPY": 1.47,
            "USD": 0.013,
            "EUR": 0.011,
            "GBP": 0.0093,
            "CAD": 0.018,
            "AUD": 0.019,
            "CNY": 0.096,
            "KRW": 16.35,
            "BRL": 0.070,
            "MXN": 0.27,
            "RUB": 0.95,
            "ZAR": 0.24,
            "CHF": 0.013,
            "SEK": 0.14,
            "SAR": 0.050,
            "AED": 0.049,
            "TRY": 0.10,
            "ARS": 1.25
        }
    };

    if (sampleRates[base] && sampleRates[base][target]) {
        return sampleRates[base][target];
    } else if (base === target) {
        return 1; // 同じ通貨なら1を返す
    } else {
        return "N/A";
    }
}
