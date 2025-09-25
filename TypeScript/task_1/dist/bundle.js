/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQWlCRSxJQUFNLFlBQVksR0FBeUIsVUFBQyxTQUFTLEVBQUUsUUFBUTtJQUM3RCxPQUFPLFVBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsZUFBSyxRQUFRLENBQUUsQ0FBQztBQUMvQyxDQUFDLENBQUM7QUFXRjtJQUNFLHNCQUFvQixTQUFpQixFQUFVLFFBQWdCO1FBQTNDLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFRO0lBQUcsQ0FBQztJQUVuRSxxQ0FBYyxHQUFkO1FBQ0UsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBUZWFjaGVyIHtcbiAgICByZWFkb25seSBmaXJzdE5hbWU6IHN0cmluZztcbiAgICByZWFkb25seSBsYXN0TmFtZTogc3RyaW5nO1xuICAgIGZ1bGxUaW1lRW1wbG95ZWU6IGJvb2xlYW47XG4gICAgeWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXI7XG4gICAgbG9jYXRpb246IHN0cmluZztcbiAgICBbcHJvcE5hbWU6IHN0cmluZ106IGFueTtcbiAgfVxuICBcbiAgaW50ZXJmYWNlIERpcmVjdG9ycyBleHRlbmRzIFRlYWNoZXIge1xuICAgIG51bWJlck9mUmVwb3J0czogbnVtYmVyO1xuICB9XG4gIFxuICBpbnRlcmZhY2UgcHJpbnRUZWFjaGVyRnVuY3Rpb24ge1xuICAgIChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IHN0cmluZztcbiAgfVxuICBcbiAgY29uc3QgcHJpbnRUZWFjaGVyOiBwcmludFRlYWNoZXJGdW5jdGlvbiA9IChmaXJzdE5hbWUsIGxhc3ROYW1lKSA9PiB7XG4gICAgcmV0dXJuIGAke2ZpcnN0TmFtZS5jaGFyQXQoMCl9LiAke2xhc3ROYW1lfWA7XG4gIH07XG4gIFxuICBpbnRlcmZhY2UgU3R1ZGVudENvbnN0cnVjdG9yIHtcbiAgICBuZXcgKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogU3R1ZGVudENsYXNzSW50ZXJmYWNlO1xuICB9XG4gIFxuICBpbnRlcmZhY2UgU3R1ZGVudENsYXNzSW50ZXJmYWNlIHtcbiAgICB3b3JrT25Ib21ld29yaygpOiBzdHJpbmc7XG4gICAgZGlzcGxheU5hbWUoKTogc3RyaW5nO1xuICB9XG4gIFxuICBjbGFzcyBTdHVkZW50Q2xhc3MgaW1wbGVtZW50cyBTdHVkZW50Q2xhc3NJbnRlcmZhY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyc3ROYW1lOiBzdHJpbmcsIHByaXZhdGUgbGFzdE5hbWU6IHN0cmluZykge31cbiAgXG4gICAgd29ya09uSG9tZXdvcmsoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBcIkN1cnJlbnRseSB3b3JraW5nXCI7XG4gICAgfVxuICBcbiAgICBkaXNwbGF5TmFtZSgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuZmlyc3ROYW1lO1xuICAgIH1cbiAgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9