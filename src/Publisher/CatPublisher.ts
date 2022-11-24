import { Injectable } from '@nestjs/common';
import { PubSub } from '@google-cloud/pubsub';

@Injectable()
export class CatPublisher {
  pubsub = new PubSub();

  topic = this.pubsub.topic('projects/terraform-test-368613/topics/cat_topic');

  async publish(): Promise<void> {
    console.log('Published cat message!');
    await this.topic.publishMessage({
      json: {
        name: 'Cat',
        animal: true,
        mammal: true,
        size: 'small',
        population: 350000000000,
      },
      attributes: { name: 'CatPublisher' },
    });
  }
}
