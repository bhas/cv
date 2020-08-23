

function loadConnect4() {
    var unityInstance = UnityLoader.instantiate("connect4Container", './src/assets/unity/connect-4/Build/Built-connect-4.json', {onProgress: UnityProgress});
}

function loadTicTacToe() {
    var unityInstance = UnityLoader.instantiate("ticTacToeContainer", "unity/Tic-Tac-Toe/Build/Test build.json", {onProgress: UnityProgress});
}

function loadCarAi() {
    var unityInstance = UnityLoader.instantiate("carAiContainer", "unity//carAi/Build/carAi Build.json", {onProgress: UnityProgress});
}
