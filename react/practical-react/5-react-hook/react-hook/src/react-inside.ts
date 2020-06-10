let hooks = null;

export function useHook() {
    // ...
    hooks.push(hookData);
}

function process_a_component_rendering(component) {
    hooks = [];
    component();
    let hooksForThisComponent = hooks;
    hooks = null;
    // ...
}

// 훅이 사용된 순서를 저장하고 배열에 저장된 순서를 기반으로 훅을 관리한다.