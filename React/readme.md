## hooks usestate原理

```
 function mountState(initialState) {
    const hook = mountWorkInProgressHook();
    if (typeof initialState === 'function') {
        // 如果第一个参数是函数，执行函数得到初始化state
        initialState = initialState();
    }
    hook.memoizedState = hook.baseState = initialState;

    // 创建queue 保存更新信息
    const queue = hook.queue = { ...};
     // dispatchAction 为更新调度的主要函数
    const dispatch = queue.dispatch = dispatchAction.bind(null, currentlyRenderingFiber,queue)

    return [hook.memoizedState, dispatch]
}

```