// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Decentragram {

  struct Image{
    uint image_id;
    string name;
    string description;
    string hash;
    address payable author;
    uint minimum_tip;
    uint total_tip;
    uint date;
  }

  uint public image_count = 0;
  mapping (uint=>Image) public images;

  event added_image(uint image_id,string name,string description,string hash,uint minimum_tip);
  event tipped_image(uint image_id,string name,uint tip_amount,uint total_tip,address payable author,address tipper);
  
  
  function upload_image(string memory _hash,string memory _name,string memory _description,address payable _author) public payable{

    //Create an new image instance
    image_count++;
    Image memory new_image = Image(image_count,_name,_description,_hash,_author,msg.value,0,block.timestamp);

    //Add the image to the mapping
    images[image_count] = new_image;

    //Emit an event 
    emit added_image(image_count,_name,_description,_hash,msg.value);
  }

  function tip_image(uint _image_id) public payable{

    //Checking if teh image exists
    require(_image_id > 0,"Image id should be positive");
    require(_image_id <= image_count,"Image id should be less than or equal to current image count");

    //Extract the tip amount and check if it is valid 
    uint _tip_amount = msg.value;
    require(_tip_amount > 0,"Tip amount should be greater than 0");

    //find the image with the given image id
    Image memory image = images[_image_id];
    
    //Send the tip to the author of the image
    address payable _author = image.author;
    _author.transfer(_tip_amount);

    //Add the tip amount to the total tip of the image
    image.total_tip += _tip_amount;

    //Update the image in the mapping
    images[_image_id] = image;

    //emit an event 
    emit tipped_image(image.image_id,image.name, _tip_amount,image.total_tip,_author,msg.sender);
  }

}
