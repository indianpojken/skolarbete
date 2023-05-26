import mongoose from 'mongoose';

export interface User {
  username: string;
  password: string;
  subscriptions: mongoose.Types.ObjectId[];
}

const userSchema = new mongoose.Schema<User>({
  username: { type: String, required: true },
  password: { type: String, required: true },
  subscriptions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Channel',
    },
  ],
});

export const userModel = mongoose.model<User>('User', userSchema);
