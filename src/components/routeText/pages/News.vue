<template>
    <div>
        <ul>
            <li>news001 <input type="text"></li>
            <li>news002 <input type="text"></li>
            <li>news003 <input type="text"></li>
        </ul>
    </div>
  </template>
  
  <script>

  export default {
      name:'News',
      activated () {
        this.timer = setInterval(() => {
            console.log(123);
        }, 500);
        console.log('组件激活');
      },
      deactivated () {
        console.log('组件失活');
        clearInterval(this.timer);
      }
  }
  </script>
  
  <style>
  
  </style>