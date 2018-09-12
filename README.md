# Stackery Hello World - Node.js 8

Slightly modified by Toby

```bash
.
├── README.md                   <-- This README file
├── src                         <-- Source code dir for all AWS Lambda functions
│   ├── getWelcomePage          <-- Source code dir for getWelcomePage function
│   │   ├── README.md           <-- Function-specific README
│   │   ├── index.js            <-- Lambda function code
│   │   ├── package.json        <-- NodeJS dependencies
│   │   └── welcome.html        <-- HTML welcome page returned by Lambda function
│   └── logErrors               <-- Source code dir for logErrors function
│       ├── README.md           <-- Function-specific README
│       ├── index.js            <-- Lambda function code
│       └── package.json        <-- NodeJS dependencies
└── template.yaml               <-- SAM infrastructure-as-code template
```

