// In JavaScript there are 5 different data types that can contain values: (5 loại dữ liệu:)

//      string          là chuỗi kí tự được viết trong ""
//      number          Kiểu số
//      boolean         Kiểm tra, trả về 1 hoặc 0 (true or false)
//      object          kểu khai báo đối tượng (key -> value) được tạo bên trong {}
//      function        Hàm để thực thi một hành động nào đó được viết trong hàm


// There are 6 types of objects: (6 loại đối tượng)

//      Object          đối tượng
//      Date            ngày, tháng, năm, ...
//      Array           mảng
//      String          chuỗi
//      Number          số
//      Boolean         return đúng, sai

// And 2 data types that cannot contain values: (2 kiểu dữ liệ ko được chứa giá trị)

//      null            không có giá trị        
//      undefined       không tồn tại giá trị



typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"