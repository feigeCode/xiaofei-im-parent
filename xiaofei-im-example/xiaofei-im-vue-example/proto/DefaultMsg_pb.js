// source: DefaultMsg.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.com.feige.im.pojo.proto.Auth', null, global);
goog.exportSymbol('proto.com.feige.im.pojo.proto.Forced', null, global);
goog.exportSymbol('proto.com.feige.im.pojo.proto.Msg', null, global);
goog.exportSymbol('proto.com.feige.im.pojo.proto.TransportMsg', null, global);
goog.exportSymbol('proto.com.feige.im.pojo.proto.TransportMsg.MsgType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.feige.im.pojo.proto.Auth = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.feige.im.pojo.proto.Auth, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.feige.im.pojo.proto.Auth.displayName = 'proto.com.feige.im.pojo.proto.Auth';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.feige.im.pojo.proto.Forced = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.feige.im.pojo.proto.Forced, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.feige.im.pojo.proto.Forced.displayName = 'proto.com.feige.im.pojo.proto.Forced';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.feige.im.pojo.proto.Msg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.feige.im.pojo.proto.Msg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.feige.im.pojo.proto.Msg.displayName = 'proto.com.feige.im.pojo.proto.Msg';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.feige.im.pojo.proto.TransportMsg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.feige.im.pojo.proto.TransportMsg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.feige.im.pojo.proto.TransportMsg.displayName = 'proto.com.feige.im.pojo.proto.TransportMsg';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.feige.im.pojo.proto.Auth.prototype.toObject = function(opt_includeInstance) {
  return proto.com.feige.im.pojo.proto.Auth.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.feige.im.pojo.proto.Auth} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.feige.im.pojo.proto.Auth.toObject = function(includeInstance, msg) {
  var f, obj = {
    ip: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deviceid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    devicename: jspb.Message.getFieldWithDefault(msg, 3, ""),
    version: jspb.Message.getFieldWithDefault(msg, 4, ""),
    osversion: jspb.Message.getFieldWithDefault(msg, 5, ""),
    language: jspb.Message.getFieldWithDefault(msg, 6, ""),
    token: jspb.Message.getFieldWithDefault(msg, 7, ""),
    platform: jspb.Message.getFieldWithDefault(msg, 8, ""),
    address: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.feige.im.pojo.proto.Auth}
 */
proto.com.feige.im.pojo.proto.Auth.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.feige.im.pojo.proto.Auth;
  return proto.com.feige.im.pojo.proto.Auth.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.feige.im.pojo.proto.Auth} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.feige.im.pojo.proto.Auth}
 */
proto.com.feige.im.pojo.proto.Auth.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevicename(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOsversion(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatform(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.feige.im.pojo.proto.Auth.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();

  proto.com.feige.im.pojo.proto.Auth.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.feige.im.pojo.proto.Auth} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.feige.im.pojo.proto.Auth.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeviceid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDevicename();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOsversion();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPlatform();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string ip = 1;
 * @return {string}
 */
proto.com.feige.im.pojo.proto.Auth.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.feige.im.pojo.proto.Auth} returns this
 */
proto.com.feige.im.pojo.proto.Auth.prototype.setIp = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string deviceId = 2;
 * @return {string}
 */
proto.com.feige.im.pojo.proto.Auth.prototype.getDeviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.feige.im.pojo.proto.Auth} returns this
 */
proto.com.feige.im.pojo.proto.Auth.prototype.setDeviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string deviceName = 3;
 * @return {string}
 */
proto.com.feige.im.pojo.proto.Auth.prototype.getDevicename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.feige.im.pojo.proto.Auth} returns this
 */
proto.com.feige.im.pojo.proto.Auth.prototype.setDevicename = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string version = 4;
 * @return {string}
 */
proto.com.feige.im.pojo.proto.Auth.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.feige.im.pojo.proto.Auth} returns this
 */
proto.com.feige.im.pojo.proto.Auth.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string osVersion = 5;
 * @return {string}
 */
proto.com.feige.im.pojo.proto.Auth.prototype.getOsversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.feige.im.pojo.proto.Auth} returns this
 */
proto.com.feige.im.pojo.proto.Auth.prototype.setOsversion = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string language = 6;
 * @return {string}
 */
proto.com.feige.im.pojo.proto.Auth.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.feige.im.pojo.proto.Auth} returns this
 */
proto.com.feige.im.pojo.proto.Auth.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string token = 7;
 * @return {string}
 */
proto.com.feige.im.pojo.proto.Auth.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.feige.im.pojo.proto.Auth} returns this
 */
proto.com.feige.im.pojo.proto.Auth.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string platform = 8;
 * @return {string}
 */
proto.com.feige.im.pojo.proto.Auth.prototype.getPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.feige.im.pojo.proto.Auth} returns this
 */
proto.com.feige.im.pojo.proto.Auth.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string address = 9;
 * @return {string}
 */
proto.com.feige.im.pojo.proto.Auth.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.feige.im.pojo.proto.Auth} returns this
 */
proto.com.feige.im.pojo.proto.Auth.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.feige.im.pojo.proto.Forced.prototype.toObject = function(opt_includeInstance) {
  return proto.com.feige.im.pojo.proto.Forced.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.feige.im.pojo.proto.Forced} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.feige.im.pojo.proto.Forced.toObject = function(includeInstance, msg) {
  var f, obj = {
    ip: jspb.Message.getFieldWithDefault(msg, 1, ""),
    address: jspb.Message.getFieldWithDefault(msg, 2, ""),
    content: jspb.Message.getFieldWithDefault(msg, 3, ""),
    devicename: jspb.Message.getFieldWithDefault(msg, 4, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.feige.im.pojo.proto.Forced}
 */
proto.com.feige.im.pojo.proto.Forced.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.feige.im.pojo.proto.Forced;
  return proto.com.feige.im.pojo.proto.Forced.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.feige.im.pojo.proto.Forced} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.feige.im.pojo.proto.Forced}
 */
proto.com.feige.im.pojo.proto.Forced.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevicename(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.feige.im.pojo.proto.Forced.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.feige.im.pojo.proto.Forced.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.feige.im.pojo.proto.Forced} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.feige.im.pojo.proto.Forced.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDevicename();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTimestamp();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string ip = 1;
 * @return {string}
 */
proto.com.feige.im.pojo.proto.Forced.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.feige.im.pojo.proto.Forced} returns this
 */
proto.com.feige.im.pojo.proto.Forced.prototype.setIp = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.com.feige.im.pojo.proto.Forced.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.feige.im.pojo.proto.Forced} returns this
 */
proto.com.feige.im.pojo.proto.Forced.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.com.feige.im.pojo.proto.Forced.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.feige.im.pojo.proto.Forced} returns this
 */
proto.com.feige.im.pojo.proto.Forced.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string deviceName = 4;
 * @return {string}
 */
proto.com.feige.im.pojo.proto.Forced.prototype.getDevicename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.feige.im.pojo.proto.Forced} returns this
 */
proto.com.feige.im.pojo.proto.Forced.prototype.setDevicename = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string timestamp = 5;
 * @return {string}
 */
proto.com.feige.im.pojo.proto.Forced.prototype.getTimestamp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.feige.im.pojo.proto.Forced} returns this
 */
proto.com.feige.im.pojo.proto.Forced.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.feige.im.pojo.proto.Msg.prototype.toObject = function(opt_includeInstance) {
  return proto.com.feige.im.pojo.proto.Msg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.feige.im.pojo.proto.Msg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.feige.im.pojo.proto.Msg.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    senderid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    receiverid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    content: jspb.Message.getFieldWithDefault(msg, 4, ""),
    format: jspb.Message.getFieldWithDefault(msg, 5, 0),
    msgtype: jspb.Message.getFieldWithDefault(msg, 6, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 7, ""),
    status: jspb.Message.getFieldWithDefault(msg, 8, 0),
    extra: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.feige.im.pojo.proto.Msg}
 */
proto.com.feige.im.pojo.proto.Msg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.feige.im.pojo.proto.Msg;
  return proto.com.feige.im.pojo.proto.Msg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.feige.im.pojo.proto.Msg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.feige.im.pojo.proto.Msg}
 */
proto.com.feige.im.pojo.proto.Msg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceiverid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFormat(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMsgtype(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimestamp(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStatus(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setExtra(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.feige.im.pojo.proto.Msg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.feige.im.pojo.proto.Msg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.feige.im.pojo.proto.Msg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.feige.im.pojo.proto.Msg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSenderid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReceiverid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFormat();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getMsgtype();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getTimestamp();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getExtra();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.com.feige.im.pojo.proto.Msg.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.com.feige.im.pojo.proto.Msg} returns this
 */
proto.com.feige.im.pojo.proto.Msg.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string senderId = 2;
 * @return {string}
 */
proto.com.feige.im.pojo.proto.Msg.prototype.getSenderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.feige.im.pojo.proto.Msg} returns this
 */
proto.com.feige.im.pojo.proto.Msg.prototype.setSenderid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string receiverId = 3;
 * @return {string}
 */
proto.com.feige.im.pojo.proto.Msg.prototype.getReceiverid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.feige.im.pojo.proto.Msg} returns this
 */
proto.com.feige.im.pojo.proto.Msg.prototype.setReceiverid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string content = 4;
 * @return {string}
 */
proto.com.feige.im.pojo.proto.Msg.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.feige.im.pojo.proto.Msg} returns this
 */
proto.com.feige.im.pojo.proto.Msg.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 format = 5;
 * @return {number}
 */
proto.com.feige.im.pojo.proto.Msg.prototype.getFormat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.com.feige.im.pojo.proto.Msg} returns this
 */
proto.com.feige.im.pojo.proto.Msg.prototype.setFormat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 msgType = 6;
 * @return {number}
 */
proto.com.feige.im.pojo.proto.Msg.prototype.getMsgtype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.com.feige.im.pojo.proto.Msg} returns this
 */
proto.com.feige.im.pojo.proto.Msg.prototype.setMsgtype = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string timestamp = 7;
 * @return {string}
 */
proto.com.feige.im.pojo.proto.Msg.prototype.getTimestamp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.feige.im.pojo.proto.Msg} returns this
 */
proto.com.feige.im.pojo.proto.Msg.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional uint32 status = 8;
 * @return {number}
 */
proto.com.feige.im.pojo.proto.Msg.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.com.feige.im.pojo.proto.Msg} returns this
 */
proto.com.feige.im.pojo.proto.Msg.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string extra = 9;
 * @return {string}
 */
proto.com.feige.im.pojo.proto.Msg.prototype.getExtra = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.feige.im.pojo.proto.Msg} returns this
 */
proto.com.feige.im.pojo.proto.Msg.prototype.setExtra = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.feige.im.pojo.proto.TransportMsg.prototype.toObject = function(opt_includeInstance) {
  return proto.com.feige.im.pojo.proto.TransportMsg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.feige.im.pojo.proto.TransportMsg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.feige.im.pojo.proto.TransportMsg.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    msg: (f = msg.getMsg()) && proto.com.feige.im.pojo.proto.Msg.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.feige.im.pojo.proto.TransportMsg}
 */
proto.com.feige.im.pojo.proto.TransportMsg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.feige.im.pojo.proto.TransportMsg;
  return proto.com.feige.im.pojo.proto.TransportMsg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.feige.im.pojo.proto.TransportMsg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.feige.im.pojo.proto.TransportMsg}
 */
proto.com.feige.im.pojo.proto.TransportMsg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.com.feige.im.pojo.proto.TransportMsg.MsgType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.com.feige.im.pojo.proto.Msg;
      reader.readMessage(value,proto.com.feige.im.pojo.proto.Msg.deserializeBinaryFromReader);
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.feige.im.pojo.proto.TransportMsg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.feige.im.pojo.proto.TransportMsg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.feige.im.pojo.proto.TransportMsg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.feige.im.pojo.proto.TransportMsg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMsg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.com.feige.im.pojo.proto.Msg.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.com.feige.im.pojo.proto.TransportMsg.MsgType = {
  PRIVATE: 0,
  GROUP: 1,
  OTHER: 2
};

/**
 * optional MsgType type = 1;
 * @return {!proto.com.feige.im.pojo.proto.TransportMsg.MsgType}
 */
proto.com.feige.im.pojo.proto.TransportMsg.prototype.getType = function() {
  return /** @type {!proto.com.feige.im.pojo.proto.TransportMsg.MsgType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.com.feige.im.pojo.proto.TransportMsg.MsgType} value
 * @return {!proto.com.feige.im.pojo.proto.TransportMsg} returns this
 */
proto.com.feige.im.pojo.proto.TransportMsg.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Msg msg = 2;
 * @return {?proto.com.feige.im.pojo.proto.Msg}
 */
proto.com.feige.im.pojo.proto.TransportMsg.prototype.getMsg = function() {
  return /** @type{?proto.com.feige.im.pojo.proto.Msg} */ (
    jspb.Message.getWrapperField(this, proto.com.feige.im.pojo.proto.Msg, 2));
};


/**
 * @param {?proto.com.feige.im.pojo.proto.Msg|undefined} value
 * @return {!proto.com.feige.im.pojo.proto.TransportMsg} returns this
*/
proto.com.feige.im.pojo.proto.TransportMsg.prototype.setMsg = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.feige.im.pojo.proto.TransportMsg} returns this
 */
proto.com.feige.im.pojo.proto.TransportMsg.prototype.clearMsg = function() {
  return this.setMsg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.feige.im.pojo.proto.TransportMsg.prototype.hasMsg = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.com.feige.im.pojo.proto);
