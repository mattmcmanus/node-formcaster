var _ = require('underscore');

/*!
 * formcaster
 * https://github.com/mattmcmanus/formcaster
 *
 * Copyright (c) 2013 Matt McManus
 * Licensed under the MIT license.
 */

/**
  * Form Constructure
  */
var f = function(options) {
  // Cleanup and prep, YO!
  if (!options.name || !options.tag ) {
    throw new Error('No field name, tag or attributes provided');
  }
  // Create the class attr if it isn't there
  if (!options.attr) { options.attr = {}; }
  if (!options.attr['class']) { options.attr.class = ''; }
  // If it's not a checkbox then add a default classes
  if (options.attr['type'] !== 'checkbox') { options.attr.class = options.attr.class + ' input-xlarge'; }
  // If no field type is added and it's an input then set 
  // the default type to text
  if (!options.attr['type'] && options.tag !== 'textarea') {
    options.attr.type = 'text';
  }

  var field = '', 
      classes = options.name + ' ' + options.tag;

  field += '<div class="control-group ' + classes + '">';

  if (options.label) {
    field += '<label';
    if (options.attr.type && options.attr.type !== 'checkbox' || options.tag === 'textarea') {
      field += ' for="' + options.name + '">' + options.label + '</label>';
    } else {
      field += '>';
    }
  }

  field += '<' + options.tag + ' name="' + options.name + '"';
  
  // Loop through all the attributes
  _.each(options.attr, function(value, attr){
    field += ' '+ attr + '="' + value + '"';
  });
  
  // Close the tag differently if its a texarea
  var value = (options.value) ? options.value : '';
  
  if (options.tag === 'textarea') {
    field += '>' + value + '</textarea>';
  } else if (options.attr.type === 'checkbox') {
    field += (value) ? ' checked />': ' />';
  } else {
    field += ' value="'+ value +'" />';
  }

  // Close the label if youre making a checkbox
  if (options.label && options.attr.type && options.attr.type === 'checkbox') {
    field += options.label + '</label>';
  }

  if (options.help) {
    field += '<p class="help-block">' + options.help + '</p>';
  }

  field += '</div>'; // /.control-group
  
  return field;
};

var fInput = function(options) {
  options.tag = 'input';
  return this.f(options);
};

var formcaster = module.exports = {
  f: f,
  fInput: fInput
};