'use strict';

var bgtrade = module.exports;

// module information
bgtrade.version = 'v' + require('./package.json').version;
bgtrade.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of bgtrade-lib found. ' +
      'Please make sure to require bgtrade-lib and check that submodules do' +
      ' not also include their own bgtrade-lib dependency.';
    throw new Error(message);
  }
};
bgtrade.versionGuard(global._bgtrade);
global._bgtrade = bgtrade.version;

// crypto
bgtrade.crypto = {};
bgtrade.crypto.BN = require('./lib/crypto/bn');
bgtrade.crypto.ECDSA = require('./lib/crypto/ecdsa');
bgtrade.crypto.Hash = require('./lib/crypto/hash');
bgtrade.crypto.Random = require('./lib/crypto/random');
bgtrade.crypto.Point = require('./lib/crypto/point');
bgtrade.crypto.Signature = require('./lib/crypto/signature');

// encoding
bgtrade.encoding = {};
bgtrade.encoding.Base58 = require('./lib/encoding/base58');
bgtrade.encoding.Base58Check = require('./lib/encoding/base58check');
bgtrade.encoding.BufferReader = require('./lib/encoding/bufferreader');
bgtrade.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
bgtrade.encoding.Varint = require('./lib/encoding/varint');

// utilities
bgtrade.util = {};
bgtrade.util.buffer = require('./lib/util/buffer');
bgtrade.util.js = require('./lib/util/js');
bgtrade.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
bgtrade.errors = require('./lib/errors');

// main bitcoin library
bgtrade.Address = require('./lib/address');
bgtrade.Block = require('./lib/block');
bgtrade.MerkleBlock = require('./lib/block/merkleblock');
bgtrade.BlockHeader = require('./lib/block/blockheader');
bgtrade.HDPrivateKey = require('./lib/hdprivatekey.js');
bgtrade.HDPublicKey = require('./lib/hdpublickey.js');
bgtrade.Networks = require('./lib/networks');
bgtrade.Opcode = require('./lib/opcode');
bgtrade.PrivateKey = require('./lib/privatekey');
bgtrade.PublicKey = require('./lib/publickey');
bgtrade.Script = require('./lib/script');
bgtrade.Transaction = require('./lib/transaction');
bgtrade.URI = require('./lib/uri');
bgtrade.Unit = require('./lib/unit');

// dependencies, subject to change
bgtrade.deps = {};
bgtrade.deps.bnjs = require('bn.js');
bgtrade.deps.bs58 = require('bs58');
bgtrade.deps.Buffer = Buffer;
bgtrade.deps.elliptic = require('elliptic');
bgtrade.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
bgtrade.Transaction.sighash = require('./lib/transaction/sighash');
