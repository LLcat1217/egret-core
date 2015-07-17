//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////


module dragonBones {
    /**
     * @class dragonBones.EgretFactory
     * @extends dragonBones.BaseFactory
     * @classdesc
     * Egret引擎中DragonBones工厂的基类实现
     */
    export class EgretFactory extends BaseFactory {
        constructor() {
            super(this);
        }

        /** @private */
        public _generateArmature():Armature {
            var armature:Armature = new Armature(new egret.DisplayObjectContainer());
            return armature;
        }

        /** @private */
        public _generateSlot():Slot {
            var slot:Slot = new EgretSlot();
            return slot;
        }

        /** @private */
        public _generateDisplay(textureAtlas:EgretTextureAtlas, fullName:string, pivotX:number, pivotY:number):any {
            var bitmap:egret.Bitmap = new egret.Bitmap();
            bitmap.texture = textureAtlas.getTexture(fullName);
            if(isNaN(pivotX)||isNaN(pivotY))
            {
                bitmap.anchorOffsetX = bitmap.width/2;
                bitmap.anchorOffsetY = bitmap.height/2;
            }
            else
            {
                bitmap.anchorOffsetX = pivotX;
                bitmap.anchorOffsetY = pivotY;
            }
            return bitmap;
        }

        public _generateFastArmature():FastArmature {
            var armature:FastArmature = new FastArmature(new egret.DisplayObjectContainer());
            return armature;
        }
        public _generateFastSlot():FastSlot {
            var slot:FastSlot = new EgretFastSlot();
            return slot;
        }
    }
}