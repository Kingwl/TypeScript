Input::
//// [/user/username/projects/myproject/XY.ts]

export const a = 1;
export const b = 2;


//// [/user/username/projects/myproject/link.ts] symlink(/user/username/projects/myproject/Xy.ts)
//// [/user/username/projects/myproject/b.ts]

import { a } from "./Xy";
import { b } from "./link";

a;b;


//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/user/username/projects/myproject/tsconfig.json]
{"compilerOptions":{"forceConsistentCasingInFileNames":true}}


/a/lib/tsc.js --w --p . --explainFiles
Output::
>> Screen clear
[[90m12:00:25 AM[0m] Starting compilation in watch mode...

[96mb.ts[0m:[93m2[0m:[93m19[0m - [91merror[0m[90m TS1149: [0mFile name '/user/username/projects/myproject/Xy.ts' differs from already included file name '/user/username/projects/myproject/XY.ts' only in casing.
  The file is in the program because:
    Matched by include pattern '**/*' in 'tsconfig.json'
    Imported via "./Xy" from file '/user/username/projects/myproject/b.ts'

[7m2[0m import { a } from "./Xy";
[7m [0m [91m                  ~~~~~~[0m

../../../../a/lib/lib.d.ts
  Default library
XY.ts
  Matched by include pattern '**/*' in 'tsconfig.json'
  Imported via "./Xy" from file 'b.ts'
link.ts
  Imported via "./link" from file 'b.ts'
  Matched by include pattern '**/*' in 'tsconfig.json'
b.ts
  Matched by include pattern '**/*' in 'tsconfig.json'
[[90m12:00:32 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/myproject/XY.ts","/user/username/projects/myproject/b.ts","/user/username/projects/myproject/link.ts"]
Program options: {"forceConsistentCasingInFileNames":true,"watch":true,"project":"/user/username/projects/myproject","explainFiles":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/XY.ts
/user/username/projects/myproject/link.ts
/user/username/projects/myproject/b.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/XY.ts
/user/username/projects/myproject/link.ts
/user/username/projects/myproject/b.ts

WatchedFiles::
/user/username/projects/myproject/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/xy.ts:
  {"fileName":"/user/username/projects/myproject/XY.ts","pollingInterval":250}
/user/username/projects/myproject/b.ts:
  {"fileName":"/user/username/projects/myproject/b.ts","pollingInterval":250}
/user/username/projects/myproject/link.ts:
  {"fileName":"/user/username/projects/myproject/link.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject:
  {"directoryName":"/user/username/projects/myproject","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/XY.js]
"use strict";
exports.__esModule = true;
exports.b = exports.a = void 0;
exports.a = 1;
exports.b = 2;


//// [/user/username/projects/myproject/link.js]
"use strict";
exports.__esModule = true;
exports.b = exports.a = void 0;
exports.a = 1;
exports.b = 2;


//// [/user/username/projects/myproject/b.js]
"use strict";
exports.__esModule = true;
var Xy_1 = require("./Xy");
var link_1 = require("./link");
Xy_1.a;
link_1.b;



Change:: Prepend a line to moduleA

Input::
//// [/user/username/projects/myproject/XY.ts]
// some comment
                        
export const a = 1;
export const b = 2;



Output::
>> Screen clear
[[90m12:00:35 AM[0m] File change detected. Starting incremental compilation...

[96mb.ts[0m:[93m2[0m:[93m19[0m - [91merror[0m[90m TS1149: [0mFile name '/user/username/projects/myproject/Xy.ts' differs from already included file name '/user/username/projects/myproject/XY.ts' only in casing.
  The file is in the program because:
    Matched by include pattern '**/*' in 'tsconfig.json'
    Imported via "./Xy" from file '/user/username/projects/myproject/b.ts'

[7m2[0m import { a } from "./Xy";
[7m [0m [91m                  ~~~~~~[0m

../../../../a/lib/lib.d.ts
  Default library
XY.ts
  Matched by include pattern '**/*' in 'tsconfig.json'
  Imported via "./Xy" from file 'b.ts'
link.ts
  Imported via "./link" from file 'b.ts'
  Matched by include pattern '**/*' in 'tsconfig.json'
b.ts
  Matched by include pattern '**/*' in 'tsconfig.json'
[[90m12:00:39 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/myproject/XY.ts","/user/username/projects/myproject/b.ts","/user/username/projects/myproject/link.ts"]
Program options: {"forceConsistentCasingInFileNames":true,"watch":true,"project":"/user/username/projects/myproject","explainFiles":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/XY.ts
/user/username/projects/myproject/link.ts
/user/username/projects/myproject/b.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/XY.ts

WatchedFiles::
/user/username/projects/myproject/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/xy.ts:
  {"fileName":"/user/username/projects/myproject/XY.ts","pollingInterval":250}
/user/username/projects/myproject/b.ts:
  {"fileName":"/user/username/projects/myproject/b.ts","pollingInterval":250}
/user/username/projects/myproject/link.ts:
  {"fileName":"/user/username/projects/myproject/link.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject:
  {"directoryName":"/user/username/projects/myproject","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/XY.js]
"use strict";
// some comment
exports.__esModule = true;
exports.b = exports.a = void 0;
exports.a = 1;
exports.b = 2;


