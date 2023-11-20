Page({
    data: {
        options: [
            {
                title: '分组一',
                list: [
                    {
                        title: '选项一',
                        value: '1',
                    },
                    {
                        title: '选项二',
                        value: '2',
                    },
                    {
                        title: '选项三',
                        value: '3',
                    },
                ],
            },
            {
                title: '分组二',
                list: [
                    {
                        title: '选项四',
                        value: '4',
                    },
                    {
                        title: '选项五',
                        value: '5',
                    },
                    {
                        title: '选项六',
                        value: '6',
                    },
                ],
            },
        ],
        value: [],
    },
    onChange: function (checked, e) {
        var value = this.data.value;
        if (checked) {
            value = value.concat(e.target.dataset.value);
        }
        else {
            value = value.filter(function (v) { return v !== e.target.dataset.value; });
        }
        this.setData({ value: value });
        console.log(value);
    },
});
