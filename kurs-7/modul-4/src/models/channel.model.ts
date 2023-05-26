import mongoose from 'mongoose';

export interface Channel {
  name: string;
  owner: mongoose.Types.ObjectId;
}

const channelSchema = new mongoose.Schema<Channel>({
  name: { type: String, required: true },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export const channelModel = mongoose.model<Channel>('Channel', channelSchema);
