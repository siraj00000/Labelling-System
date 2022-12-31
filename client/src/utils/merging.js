let dataSource = [];
export const merge = (_list, list2, list3) => {
    for (var i = 0; i < _list?.length; i++) {
        let obj = [[], [], []];
        if (dataSource.length === _list?.length) {
            break;
        }
        obj[0][i] = _list[i]?.url;
        if (i < list2?.length) {
            obj[1][i] = list2[i];
        } else obj[1][i] = "";
        if (i < list3?.length) {
            obj[2][i] = list3[i];
        } else obj[2][i] = "";
        dataSource.push(obj);
    }
    return dataSource;
};