// children 안쪽 params까지 다 탐색해서 하나의 params를 리턴해주는 재귀 함수를 짜보면 좋을것같아요!

const state = {
    root: {
        params: {},
        children: [{
                params: {},
                children: [{
                    params: {
                        userID: '1120'
                    },
                    children: [{
                        params: {
                            artistID: '1333'
                        },
                        children: []
                    }]
                }]
            },
            {
                params: {},
                children: [{
                    params: {
                        userName: 'lakjsdlkfjasf'
                    },
                    children: [{
                        params: {
                            artistName: 'jcobko'
                        },
                        children: []
                    }]
                }]
            }
        ]
    }
}

const getReducedParams = ({ params, children }) => children.reduce((acc, state) => ({...acc, ...state.params, ...getReducedParams(state) }), {...params });

console.log(getReducedParams(state.root))