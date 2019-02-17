'use strict';

var bgrade = module.exports;

// module information
bgrade.version = 'v' + require('./package.json').version;
bgrade.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of bgrade-lib found. ' +
      'Please make sure to require bgrade-lib and check that submodules do' +
      ' not also include their own bgrade-lib dependency.';
    throw new Error(message);
  }
};
bgrade.versionGuard(global._bgrade);
global._bgrade = bgrade.version;

// crypto
bgrade.crypto = {};
bgrade.crypto.BN = require('./lib/crypto/bn');
bgrade.crypto.ECDSA = require('./lib/crypto/ecdsa');
bgrade.crypto.Hash = require('./lib/crypto/hash');
bgrade.crypto.Random = require('./lib/crypto/random');
bgrade.crypto.Point = require('./lib/crypto/point');
bgrade.crypto.Signature = require('./lib/crypto/signature');

// encoding
bgrade.encoding = {};
bgrade.encoding.Base58 = require('./lib/encoding/base58');
bgrade.encoding.Base58Check = require('./lib/encoding/base58check');
bgrade.encoding.BufferReader = require('./lib/encoding/bufferreader');
bgrade.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
bgrade.encoding.Varint = require('./lib/encoding/varint');

// utilities
bgrade.util = {};
bgrade.util.buffer = require('./lib/util/buffer');
bgrade.util.js = require('./lib/util/js');
bgrade.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
bgrade.errors = require('./lib/errors');

// main bitcoin library
bgrade.Address = require('./lib/address');
bgrade.Block = require('./lib/block');
bgrade.MerkleBlock = require('./lib/block/merkleblock');
bgrade.BlockHeader = require('./lib/block/blockheader');
bgrade.HDPrivateKey = require('./lib/hdprivatekey.js');
bgrade.HDPublicKey = require('./lib/hdpublickey.js');
bgrade.Networks = require('./lib/networks');
bgrade.Opcode = require('./lib/opcode');
bgrade.PrivateKey = require('./lib/privatekey');
bgrade.PublicKey = require('./lib/publickey');
bgrade.Script = require('./lib/script');
bgrade.Transaction = require('./lib/transaction');
bgrade.URI = require('./lib/uri');
bgrade.Unit = require('./lib/unit');

// dependencies, subject to change
bgrade.deps = {};
bgrade.deps.bnjs = require('bn.js');
bgrade.deps.bs58 = require('bs58');
bgrade.deps.Buffer = Buffer;
bgrade.deps.elliptic = require('elliptic');
bgrade.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
bgrade.Transaction.sighash = require('./lib/transaction/sighash');
