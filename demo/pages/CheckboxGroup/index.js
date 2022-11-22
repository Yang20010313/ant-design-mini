Page({
  data: {
    value: ['banana'],
    options: [
      { value: 'apple', label: '苹果' },
      { value: 'orange', label: '橘子' },
      { value: 'banana', label: '香蕉' },
    ],
  },
  onChange(value, e) {
    console.log(value, e);
  },
  handleChange(value) {
    this.setData({
      value,
    });
  },
});
