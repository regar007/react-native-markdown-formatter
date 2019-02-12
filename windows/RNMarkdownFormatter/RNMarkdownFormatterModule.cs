using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Markdown.Formatter.RNMarkdownFormatter
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNMarkdownFormatterModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNMarkdownFormatterModule"/>.
        /// </summary>
        internal RNMarkdownFormatterModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNMarkdownFormatter";
            }
        }
    }
}
