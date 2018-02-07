webpackJsonp([17],{1006:function(t,n,e){"use strict";(function(t){var r=e(0),a=e(107),i=e(696),o=function(){function Transactions(t,n){var e=this;this._transactionService=t,this.router=n,null==localStorage.getItem("merchantId")&&void 0==localStorage.getItem("merchantId")||(this.merchantId=localStorage.getItem("merchantId"),this.getMerchantById(),localStorage.setItem("merchantId","")),this._transactionService.getTransactionDetailsById(-1).subscribe(function(t){e.merchantData=t.data;for(var n=0;n<t.data.length;n++){var r=new Date(1e3*+e.merchantData[n].transactionTime);e.merchantData[n].transactionTime=r}})}return Transactions.prototype.getTransactionDetailsForThisMerchant=function(t){console.log(localStorage.getItem("TransactionId")),localStorage.setItem("TransactionId",t),this.router.navigate(["/app/dashboard"])},Transactions.prototype.getMerchantById=function(){var n=this;this.merchantId=t.trim(this.merchantId),void 0==this.merchantId||0==this.merchantId.length?this.errordiv=!0:(this.errordiv=!1,this._transactionService.getTransactionDetailsById(this.merchantId).subscribe(function(t){n.merchantData=t.data;for(var e=0;e<t.data.length;e++){var r=new Date(1e3*+n.merchantData[e].transactionTime);n.merchantData[e].transactionTime=r}}))},Transactions=__decorate([r.Component({selector:"transactions",styles:[e(1047)],template:e(1087),providers:[i.TransactionService],encapsulation:r.ViewEncapsulation.None}),__metadata("design:paramtypes",["function"==typeof(n="undefined"!=typeof i.TransactionService&&i.TransactionService)&&n||Object,"function"==typeof(o="undefined"!=typeof a.Router&&a.Router)&&o||Object])],Transactions);var n,o}();n.Transactions=o}).call(n,e(43))},1007:function(t,n,e){"use strict";var r=e(74),a=e(155),i=e(0),o=e(107),s=e(1006);n.routes=[{path:"",component:s.Transactions,pathMatch:"full"}];var c=function(){function TransactionsModule(){}return TransactionsModule.routes=n.routes,TransactionsModule=__decorate([i.NgModule({declarations:[s.Transactions],imports:[r.CommonModule,a.FormsModule,o.RouterModule.forChild(n.routes)]}),__metadata("design:paramtypes",[])],TransactionsModule)}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=c},1047:function(t,n){t.exports="/***********************************/\n/**             Profitconfiguration     **/\n/***********************************/\n.content {\n  background: #34495E !important; }\n\n.subscriptionBox {\n  width: 58%;\n  margin: 0 auto;\n  position: relative;\n  height: 48px;\n  margin-top: 10px;\n  margin-bottom: 50px; }\n\n.input-wrapper {\n  position: absolute;\n  left: 0;\n  height: 100%;\n  top: 0;\n  width: 70%; }\n\n.btn-wrapper {\n  position: absolute;\n  left: 70%;\n  height: 100%;\n  top: 0;\n  width: 30%; }\n\n.btn-wrapper button, .input-wrapper input {\n  width: 100%;\n  height: 100%;\n  height: 100%; }\n\n.left-heading, .right-value {\n  position: relative;\n  float: left; }\n\n.right-value {\n  margin-left: 15px; }\n\n.left-heading p {\n  font-weight: bold; }\n\n.errosDiv {\n  width: 320px;\n  margin: 0 auto; }\n\n.input-wrapper input {\n  background: white;\n  padding-left: 15px;\n  border: none;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  font-size: 17.5 !important;\n  font-family: 'Open Sans';\n  font-weight: 500; }\n\n.btn-wrapper button {\n  border: none;\n  background: #64bbe1;\n  color: white;\n  font-family: 'Open Sans';\n  border-radius: 4px;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  font-size: 24px; }\n\n.input-wrapper input::placeholder {\n  color: #aaaaaa;\n  font-style: italic;\n  font-size: 17.5 !important;\n  font-family: 'Open Sans';\n  font-weight: 500; }\n\n@media only screen and (max-width: 560px) {\n  .subscriptionBox {\n    width: 100%; } }\n"},1087:function(t,n){t.exports='<ol class="breadcrumb">\r\n    <li class="breadcrumb-item">YOU ARE HERE</li>\r\n    <li class="breadcrumb-item active">Transactions List</li>\r\n</ol>\r\n<h1 class="page-title">Transactions\r\n    <span class="fw-semi-bold">List</span>\r\n</h1>\r\n\r\n\r\n\r\n<div class="errosDiv" *ngIf="errordiv" style="color:white">Enter a merchant Id</div>\r\n<div class="subscriptionBox clearfix">\r\n\r\n    <div class="input-wrapper">\r\n        <input type="text" name="merchantId" [(ngModel)]="merchantId" class="custom-input" placeholder="Enter merchant ID">\r\n    </div>\r\n    <div class="btn-wrapper">\r\n        <button class="btn-subscribe" (click)="getMerchantById()">Search</button>\r\n    </div>\r\n</div>\r\n\r\n\r\n<section class="widget" widget>\r\n    <div class="widget-body table-responsive">\r\n        <table class="table merchantsTable" style="    table-layout: auto;">\r\n            <thead>\r\n                <tr>\r\n                    <th class="hidden-xs-down">#</th>\r\n                    <th style="width:300px">Merchant Id</th>\r\n                    <th>Transaction Id</th>\r\n                    <th>Sending Amount</th>\r\n                    <th>Transaction Time</th>\r\n                    <th></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor="let merchant of merchantData; let i = index">\r\n                    <td class="hidden-xs-down">{{i + 1}}</td>\r\n                    <td style="width:300px">\r\n                        {{merchant.merchantId}}\r\n                    </td>\r\n                    <td>\r\n                        {{merchant.transactionId}}\r\n                    </td>\r\n                    <td>\r\n                        {{merchant.sendingAmount}}\r\n                    </td>\r\n                    <td>\r\n                        {{merchant.transactionTime}}\r\n                    </td>\r\n                    <td>\r\n                        <a (click)="getTransactionDetailsForThisMerchant(merchant.transactionId)"> View</a>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</section>'},696:function(t,n,e){"use strict";var r=e(0),a=e(156);e(242);var i=e(695),o=function(){function TransactionService(t){this.http=t,this.urlService=new i.ServiceUrl}return TransactionService.prototype.getProfitStatisticsByTime=function(t){var n=JSON.stringify({filterTime:t}),e=new a.Headers({"Content-Type":"application/json"}),r=new a.RequestOptions({method:"post",headers:e});return this.http.post(this.urlService.baseUrl+"merchant/getProfitStatisticsByTime",n,r).map(function(t){return t.json()})},TransactionService.prototype.getTransactionStatisticsByTimeRoute=function(t){var n=JSON.stringify({filterTime:t}),e=new a.Headers({"Content-Type":"application/json"}),r=new a.RequestOptions({method:"post",headers:e});return this.http.post(this.urlService.baseUrl+"merchant/getTransactionStatisticsByTimeRoute",n,r).map(function(t){return t.json()})},TransactionService.prototype.getTransactionData=function(t){var n=JSON.stringify({transactionId:t}),e=new a.Headers({"Content-Type":"application/json"}),r=new a.RequestOptions({method:"post",headers:e});return this.http.post(this.urlService.baseUrl+"merchant/getTransactionData",n,r).map(function(t){return t.json()})},TransactionService.prototype.getProfitConfiguration=function(t,n){var e=JSON.stringify({merchantProfit:t,bitpointProfit:n}),r=new a.Headers({"Content-Type":"application/json"}),i=new a.RequestOptions({method:"post",headers:r});return this.http.post(this.urlService.baseUrl+"adminConfiguration/addProfitConfiguration",e,i).map(function(t){return t.json()})},TransactionService.prototype.getTransactionDetailsById=function(t){var n=JSON.stringify({merchantId:t}),e=new a.Headers({"Content-Type":"application/json"}),r=new a.RequestOptions({method:"post",headers:e});return this.http.post(this.urlService.baseUrl+"merchant/getTransactionsByMerchantId",n,r).map(function(t){return t.json()})},TransactionService=__decorate([r.Injectable(),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof a.Http&&a.Http)&&t||Object])],TransactionService);var t}();n.TransactionService=o}});