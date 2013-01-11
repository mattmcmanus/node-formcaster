var formcaster = require('../lib/formcaster.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['f'] = {
  'Generate a textarea': function(test) {
    test.expect(1);
    var textarea = formcaster.f({tag:'textarea', name:'journal[questions][0][answer]', label: 'How are you doing? What sort of mood have you been in? (Angry, distracted, sad, apathetic, etc)', value: null, attr: {class: 'span8', 'data-save-id': 'journal0'}});
    var shouldBe = '<div class="control-group journal[questions][0][answer] textarea"><label for="journal[questions][0][answer]">How are you doing? What sort of mood have you been in? (Angry, distracted, sad, apathetic, etc)</label><textarea name="journal[questions][0][answer]" class="span8 input-xlarge" data-save-id="journal0"></textarea></div>';
    test.equals(textarea, shouldBe, "A textarea is generated");

    test.done();
  },
  
  'Generate a text input': function(test) {
    test.expect(1);
    var input = formcaster.fInput({ name:'journal[summary]', label: 'A quick status update', value: null, attr: {class:"span8 title", autofocus: 'autofocus'} } );
    var shouldBe = '<div class="control-group journal[summary] input"><label for="journal[summary]">A quick status update</label><input name="journal[summary]" class="span8 title input-xlarge" autofocus="autofocus" type="text" value="" /></div>';

    test.equals(input, shouldBe, "A input is generated");

    test.done();
  }
};