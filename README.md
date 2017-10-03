# Utterance

Some objects that will simplify the usage of web speech API.
Run "Gulp build" for a concatenated version.
<h1>Speaker - Class that handles the speech synthesis.</h1p>

<h2> Constructor</h2>
<code> new Speaker(content);</code>
<p>Creates a new speaker instance.</p>
<code>content (String) </code>
<p> String that will be synthesized. <br>
There is an issue with long strings. It is advised not to put strings longer than 250 characters in the constructor. 
Declarations are automatically cut in punctuation marks so whole statement can be longer. 
It applies only to very log sentences without any dots, questionmarks or exclamation mark.
</p>

<h2>Properties</h2>
<code>speaker.playing (Boolean)</code>
<p>Informs if player is currently synthesizing. True, also when syntesis is paused. (Get only)</p>
<code>speaker.paused (Boolean)</code>
<p>Informs if players is currently paused. (Get only)</p>
<code>speaker.synth (window.speechSynthesis)</code>
<p>Grants access to instance of speech synthesiser object.</p>

<h2>Methods</h2>
<code>speaker.start()</code>
<p>Starts synthesis based on string given to constructor.</p>
<code>speaker.pause()</code>
<p>Pauses the player.</p>
<code>speaker.resume()</code>
<p>Resumes the player, at the point it was paused</p>
<code>speaker.stop()</code>
<p>Stops the synthesis. When it is started again, it will start the synthesis at the begining of the string.</p>
<h2>Events</h2>
<code>speaker.onStart</code>
<p>Fires when synthesis starts.</p>
<code>speaker.onPause </code>
<p>Fires when synthesis is paused.</p>
<code>speaker.onResume</code>
<p>Fires when synthesis is resumed (after pause).</p>
<code>speaker.onEnd</code>
<p>Fires when synthesis ends.</p>
<br>


<h1>Command - Helper class that contains methods we want to run and voice commands assigned to them. </h1>

<h2>Constructor</h2>
<code> new Command(orders, callback);</code>
<p>Creates an command instance. Takes an array of orders and a callback that will be called with those orders.</p>
<code>orders (Array of Strings)</code>
<p>List of strings. When an order is recognized, callback will be called.</p>
<code>callback (Function)</code>
<p>Function that will be called after an order recognition.</p>
<br>


<h1>Reciever - Class responsible for listening and speech recognition.</h1>

<h2>Konstruktor</h2>
<code> new Reciever(language, commandList);</code>
<p>Creates a listener instance.</p>
<code> language (String) </code>
<p>Language in wich the speech sample will be provided in BCP 47 format, e.g. "pl" for polish, "eng" for english.</p>
<code> commandList (Array of Commands) </code>
<p> An array of command objects, which methods we want to call. </p>

<h2>Properties</h2>
<code>reciever.recording(Boolean)</code>
<p>Informs if reciever is actually recording. (Get only)</p>
<code>reciever.continuous(Boolean)</code>
<p>Informs if reciever is in continuous mode (default False).</p>
<code>reciever.recognition (SpeechRecognition)</code>
<p>Grants access to the "recogniser" object.</p>

<h2>Methods</h2>
<code>reciever.start</code>
<p>Starts recognition.</p>
<code>reciever.stop</code>
<p>Stops recognition.</p>

<h2>Events</h2>
<code>speaker.onStart</code>
<p>Fires when recognition starts.</p>
<code>speaker.onEnd</code>
<p>Fires when recognition ends.</p>