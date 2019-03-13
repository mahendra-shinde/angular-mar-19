var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(fname, lname, age) {
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
    }
    Person.prototype.print = function () {
        console.log("Personal details :\n            Name: " + this.firstName + " " + this.lastName + "\n            age: " + this.age);
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(fname, lname, age, desg) {
        var _this = _super.call(this, fname, lname, age) || this;
        _this.designation = desg;
        return _this;
    }
    return Employee;
}(Person));
var p1 = new Employee("Vijay", "Mallya", 68, "Manager");
p1.firstName = "Siddharth";
p1.print();
