interface MessageType {
  success: string;
  waring: string;
  message: string;
  error: string;
}
interface IMessageState {
  visible: boolean;
  top: number | string;
}
const CMessageType: MessageType = {
  success: 'success',
  waring: 'waring',
  message: 'message',
  error: 'error'
};
const MessageState: IMessageState = {
  visible: false,
  top: 0
};
export interface ICMessageOptions {
  type?: string;
  message: string;
  duration?: number;
}
export { CMessageType, MessageState };
