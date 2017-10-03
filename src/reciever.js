function Command(orders, callback) {
    this.orders = orders;
    this.callback = callback;
}

function Reciever(language, commandList) {
    var self = this,
        SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    self.recognition = new SpeechRecognition();

    self.commandList = commandList;
    self.recording = false;
    self.continuous = false;
    self.onStart = function () { };
    self.onEnd = function () { };

    self.recognition.lang = language || "pl";

    self.recognition.onaudioend = function (event) {
        self.recording = false;
        self.onEnd(event);
    };


    self.recognition.onstart = function (event) {
        self.onStart(event);
    };

    self.recognition.onresult = function (event) {
        var text = event.results[0][0].transcript,
            recognizedCommand = commandList.find(function (command) {
                var understood = command.orders.find(function (order) {
                    return text.includes(order);
                });
                return command.orders.includes(understood);
            });
        if (recognizedCommand !== undefined) {
            recognizedCommand.callback(text);
        }
    };

    self.start = function () {
        self.recording = true;
        checkIfContinuous(false);
        self.recognition.start();
    };
    self.stop = function () {
        self.recording = false;
        checkIfContinuous(true);
        self.recognition.stop();
    };

    function checkIfContinuous(forceStop) {
        if (self.continuous === true && forceStop === false) {
            self.recognition.onend = function () {
                self.recording = true;
                self.recognition.start();
            };
        }
        else {
            self.recognition.onend = null;
        }
    }
}

//TODO przepisać na es2016
//TODO zapętlenie
//TODO zmienić domyślny język na język przeglądarki
//TODO callback z parametrem?
//TODO w parametrze wyslyszana wartosc?