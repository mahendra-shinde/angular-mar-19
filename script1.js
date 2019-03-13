document.write("<h2>Hello World</h2>");
document.write("<select name='day'>");
for (x = 1; x < 32; x++) {
    document.write("<option>" + x + "</option>");
}
document.write("</select>");
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
document.write("<select name='month'>");
for (i = 0; i < 12; i++) {
    document.write("<option>" + months[i] + "</option>");
}