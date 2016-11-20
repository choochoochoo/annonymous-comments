import { ADD_COMMENT } from '../constants/ActionTypes.js';

const initialState = [
    {
        id: 1,
        parentId: null,
        userName: "Вася",
        date: "15 ноября 2016",
        message: "Владельцы сего девайса, подскажите плиз, если дно посуды будет меньше по диаметру большой индукционной конфорки, то она будет греть или нет? На сколько дно может быть меньше конфорки? И какой диаметр большой индукционной конфорки?",
        childComments: [
            {
                id: 3,
                parentId: 1,
                userName: "Сережа",
                date: "17 ноября 2016",
                message: "http://выключатель-автоматический.рф/Выбор/Выбор%20автомата%20по%20мощности.html по таблице выходит, что на мощность плиты 7200 Вт положено ставит автомат 40 А. Но я приглашал электрик",
                childComments: [
                    {
                        id: 4,
                        parentId: 3,
                        userName: "Витя",
                        date: "18 ноября 2016",
                        message: "Все круто",
                        childComments: []
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        userName: "Петя",
        date: "17 ноября 2016",
        message: "Скажите, пожалуйста, царапается ли поверхность этой плиты. Много раз слышала, что стеклокерамика у многих поцарапалась, на других плитах, правда.",
        childComments: []
    }
];

export default function comments(state = initialState, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [
                ...state,
                {
                    id: state.reduce((maxId, comment) => Math.max(comment.id, maxId), -1) + 1,
                    message: action.message,
                    userName: action.userName,
                    date: new Date().toString(),
                    childComments: []
                }
            ];
        default:
            return state;
    }
}
