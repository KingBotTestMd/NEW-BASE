/* Copyright (C) 2022 WHITE HACKERS
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ MD BOT
*/

'use strict';

class Base {
    constructor(KingBot) {
        Object.defineProperty(this, 'KingBot', { value: KingBot });
    }

    _clone() {
        return Object.assign(Object.create(this), this);
    }
    
 _patch(data) { 
                 return data; 
                              }
                                    }

module.exports = Base;
