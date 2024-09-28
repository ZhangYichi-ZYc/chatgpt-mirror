import EmojiPicker, {
  Emoji,
  EmojiStyle,
  Theme as EmojiTheme,
} from "emoji-picker-react";

import { ModelType } from "../store";

import BotIcon from "../icons/bot.svg";
import BlackBotIcon from "../icons/black-bot.svg";

export function getEmojiUrl(unified: string, style: EmojiStyle) {
  // Whoever owns this Content Delivery Network (CDN), I am using your CDN to serve emojis
  // Old CDN broken, so I had to switch to this one
  // Author: https://github.com/H0llyW00dzZ
  return `https://fastly.jsdelivr.net/npm/emoji-datasource-apple/img/${style}/64/${unified}.png`;
}

export function AvatarPicker(props: {
  onEmojiClick: (emojiId: string) => void;
}) {
  return (
    <EmojiPicker
      width={"100%"}
      lazyLoadEmojis
      theme={EmojiTheme.AUTO}
      getEmojiUrl={getEmojiUrl}
      onEmojiClick={(e) => {
        props.onEmojiClick(e.unified);
      }}
    />
  );
}

export function Avatar(props: { model?: ModelType; avatar?: string }) {
  if (props.model) {
    return (
      <div className="no-dark">
        {props.model?.startsWith("GPT 3.5") || 
        props.model?.startsWith("gpt-3.5") || 
        props.model === "Claude 3 Haiku" || 
        props.model === "Gemini 1.5 Flash" || 
        props.model === "通义千问 Long" || 
        props.model === "文心一言 Speed" || 
        props.model === "混元 Lite" || 
        props.model === "智谱清言" || 
        props.model === "心理咨询师 Emohaa" || 
        props.model === "星火 Lite" || 
        props.model === "MiniMax 6.5s" || 
        props.model === "GPT 4o mini" || 
        props.model === "豆包 Lite" || 
        props.model === "claude-3-haiku-20240307" || 
        props.model === "gemini-1.5-flash" || 
        props.model === "qwen-long" || 
        props.model === "ERNIE-Speed-128K" || 
        props.model === "hunyuan-Lite" || 
        props.model === "glm-4-air" || 
        props.model === "gpt-4o-mini" || 
        props.model === "emohaa" ? (
          <BotIcon className="user-avatar" />
        ) : (
          <BlackBotIcon className="user-avatar" />
        )}
      </div>
    );
  }

  return (
    <div className="user-avatar">
      {props.avatar && <EmojiAvatar avatar={props.avatar} />}
    </div>
  );
}

export function EmojiAvatar(props: { avatar: string; size?: number }) {
  return (
    <Emoji
      unified={props.avatar}
      size={props.size ?? 18}
      getEmojiUrl={getEmojiUrl}
    />
  );
}
