import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.backgroundColor = environment.navBackgroundColor;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib_1.__decorate([
        Component({
            selector: 'navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map