#!/usr/bin/env python3

try:
    from PIL import Image
except ModuleNotFoundError:
    print("Pillow module needs to be installed")
    exit(1)

import os
import sys
import json


def resize_image(img, target_width):
    target_width = min(target_width, img.width)

    ratio = img.width / target_width

    target_height = img.height / ratio

    return img.resize((int(target_width), int(target_height)))


def parse_images(prefix, thumbnail_path, path):
    struct = list()
    for file in os.listdir(path):
        if os.path.isdir(os.path.join(path, file)):
            struct.extend(parse_images(prefix,thumbnail_path, os.path.join(path,file)))
            continue
        image = Image.open(os.path.join(path, file))
        width, height = image.size

        thumbnail = resize_image(image, 400)

        new_th_name = os.path.splitext(file)[0] + ".webp"
        thumbnail.save(os.path.join(thumbnail_path, new_th_name))
        if image.width > 2560:
            resized_original = resize_image(image, 2560)
            image.close()
            width, height = resized_original.size
            resized_original.save(os.path.join(path, file))
        struct.append(
            {
                "thumbnail": os.path.join(prefix, "thumbnails", new_th_name),
                "width": width,
                "height": height,
                "original": os.path.join(prefix, "original", file),
            }
        )
    return struct


def main():
    if len(sys.argv) < 4:
        print(
            "Expected three arguments: {image directory path}, {thumbnails dir} and {path prefix}"
        )
        exit(2)

    path = sys.argv[1]
    thumbnail_path = sys.argv[2]
    prefix = sys.argv[3]

    if not os.path.exists(path):
        print("Path is invalid")
        exit(3)

    struct = parse_images(prefix, thumbnail_path, path)

    print(json.dumps(struct))


if __name__ == "__main__":
    main()
