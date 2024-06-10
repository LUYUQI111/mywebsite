document.addEventListener('DOMContentLoaded', function() {
    // 获取表单元素和爱好表格
    var form = document.getElementById('hobbyForm');
    var hobbyTable = document.querySelector('table');
  
    // 当表单提交时执行的函数
    form.addEventListener('submit', function(event) {
      // 阻止默认表单提交行为
      event.preventDefault();
  
      // 获取表单中输入的爱好名称和描述
      var hobbyName = document.getElementById('hobbyName').value;
      var hobbyDescription = document.getElementById('hobbyDescription').value;
  
      // 创建一个新的表格行
      var newRow = hobbyTable.insertRow(-1);
  
      // 创建新的单元格并设置内容
      var nameCell = newRow.insertCell(0);
      var descriptionCell = newRow.insertCell(1);
      nameCell.textContent = hobbyName;
      descriptionCell.textContent = hobbyDescription;
  
      // 清空表单输入框
      form.reset();
    });
  });
  